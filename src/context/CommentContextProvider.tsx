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
	const [isReplying, setIsReplying] = useState(false);

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
		setIsReplying(false);
	};

	const openReplyFormHandler = (id: string) => {
		setIsReplying(true);
		setCommentId(id);
	};

	const addReplyHandler = () => {
		console.log('reply');
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
				currentCommentId: commentId,
				modalStatus: modalStatus,
				openModal: openModalHandler,
				hideModal: hideModalHandler,
				addComment: addCommentHandler,
				openReplyForm: openReplyFormHandler,
				isReplying: isReplying,
				addReply: addReplyHandler,
				deleteComment: deleteCommentHandler,
			}}
		>
			{children}
		</CommentContext.Provider>
	);
};

export default CommentContextProvider;
