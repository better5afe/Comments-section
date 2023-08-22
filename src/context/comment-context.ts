import React from 'react';
import { Comment } from '../models/comment';

interface ContextTypes {
	comments: Comment[]
}

export const CommentContext = React.createContext<ContextTypes>({
	comments: []
});
