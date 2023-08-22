import { useState, useEffect } from 'react';
import { CommentContext } from './comment-context';
import { getComments as getCommentsAPI } from '../api/api';
import { Comment } from '../models/custom-types';

interface ProviderProps {
	children: React.ReactNode;
}

const CommentContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [fetchedComments, setFetchedComments] = useState<Comment[]>([]);

	useEffect(() => {
		getCommentsAPI().then((response) => setFetchedComments(response));
	}, []);

	return (
		<CommentContext.Provider value={{ comments: fetchedComments }}>
			{children}
		</CommentContext.Provider>
	);
};

export default CommentContextProvider;
