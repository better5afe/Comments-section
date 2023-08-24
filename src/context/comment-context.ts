import React from 'react';
import { Comment } from '../models/comment';

interface ContextTypes {
	comments: Comment[];
	currentCommentId: string;
	modalStatus: boolean;
	openModal: (id: string) => void;
	hideModal: () => void;
	addComment: (
		body: string,
		parentId: string | null,
		replyingTo: string | null
	) => void;
	openReplyForm: (id: string) => void;
	isReplying: boolean;
	addReply: () => void;
	deleteComment: () => void;
}

export const CommentContext = React.createContext<ContextTypes>({
	comments: [],
	currentCommentId: '',
	modalStatus: false,
	openModal: (id) => {},
	hideModal: () => {},
	addComment: (body, parentId, replyingTo) => {},
	addReply: () => {},
	openReplyForm: (id) => {},
	isReplying: false,
	deleteComment: () => {},
});
