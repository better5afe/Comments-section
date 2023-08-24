import { useState, useEffect } from 'react';
import { CommentContext } from './comment-context';
import {
	getComments as getCommentsAPI,
	addComment as addCommentAPI,
	deleteComment as deleteCommentAPI,
} from '../api/api';
import { Comment } from '../models/custom-types';

interface ProviderProps {
	children: React.ReactNode;
}

const CommentContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [fetchedComments, setFetchedComments] = useState<Comment[]>([]);
	const [modalStatus, setModalStauts] = useState(false);
	const [commentId, setCommentId] = useState('');

	useEffect(() => {
		getCommentsAPI().then((response) => setFetchedComments(response));
	}, []);

	const openModalHandler = (id: string) => {
		setModalStauts(true);
		setCommentId(id);
	};

	const hideModalHandler = () => {
		setModalStauts(false);
	};

	const addCommentHandler = (
		body: string,
		parentId: string | null,
		replyingTo: string | null
	) => {
		const newComment = addCommentAPI(body, parentId, replyingTo);
		setFetchedComments([...fetchedComments, newComment]);
	};

	const deleteCommentHandler = () => {
		const updatedComments = deleteCommentAPI(fetchedComments, commentId);

		setFetchedComments(updatedComments);
		setModalStauts(false);
	};

	return (
		<CommentContext.Provider
			value={{
				comments: fetchedComments,
				modalStatus: modalStatus,
				openModal: openModalHandler,
				hideModal: hideModalHandler,
				addComment: addCommentHandler,
				deleteComment: deleteCommentHandler,
			}}
		>
			{children}
		</CommentContext.Provider>
	);
};

export default CommentContextProvider;
