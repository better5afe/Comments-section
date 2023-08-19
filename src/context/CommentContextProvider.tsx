import { useState, useEffect } from 'react';
import { CommentContext } from './comment-context';
import { getComments as getCommentsAPI } from '../api/api';
import { Comment } from '../models/custom-types';

interface ProviderProps {
	children: React.ReactNode;
}

const CommentContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [fetchedComments, setFetchedComments] = useState<Comment[]>([]);

	const rootComments = fetchedComments.filter(
		(comment) => comment.parentId === null
	);

	const replies = fetchedComments.filter(
		(comment) => comment.parentId !== null
	);

	console.log(fetchedComments);
	console.log(rootComments);
	console.log(replies);

	useEffect(() => {
		getCommentsAPI().then((response) => setFetchedComments(response));
	}, []);

	return (
		<CommentContext.Provider
			value={{ rootComments: rootComments, replies: replies }}
		>
			{children}
		</CommentContext.Provider>
	);
};

export default CommentContextProvider;
