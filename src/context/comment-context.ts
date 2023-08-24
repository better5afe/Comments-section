import React from 'react';
import { Comment } from '../models/comment';

interface ContextTypes {
	comments: Comment[];
	modalStatus: boolean;
	openModal: (id: string) => void;
	hideModal: () => void;
	addComment: (
		body: string,
		parentId: string | null,
		replyingTo: string | null
	) => void;
	deleteComment: () => void;
}

export const CommentContext = React.createContext<ContextTypes>({
	comments: [],
	modalStatus: false,
	openModal: (id) => {},
	hideModal: () => {},
	addComment: (body, parentId, replyingTo) => {},
	deleteComment: () => {},
});
