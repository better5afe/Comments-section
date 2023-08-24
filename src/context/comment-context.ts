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
	deleteComment: () => void;
	openEdit: (id: string) => void;
	isEditing: boolean,
	editComment: () => void;
}

export const CommentContext = React.createContext<ContextTypes>({
	comments: [],
	currentCommentId: '',
	modalStatus: false,
	openModal: (id) => {},
	hideModal: () => {},
	addComment: (body, parentId, replyingTo) => {},
	openReplyForm: (id) => {},
	isReplying: false,
	deleteComment: () => { },
	openEdit: (id) => { },
	isEditing: false,
	editComment: () => {},
});
