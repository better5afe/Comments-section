import React from 'react';
import { Comment } from '../models/comment';

interface ContextTypes {
	comments: Comment[];
	modalStatus: boolean;
	openModal: (id: string) => void;
	hideModal: () => void;
	deleteComment: () => void;
}

export const CommentContext = React.createContext<ContextTypes>({
	comments: [],
	modalStatus: false,
	openModal: (id) => {},
	hideModal: () => {},
	deleteComment: () => {},
});
