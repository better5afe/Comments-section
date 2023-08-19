import React from 'react';
import { Comment } from '../models/comment';

interface ContextTypes {
	commentsList: Comment[];
}

export const CommentContext = React.createContext<ContextTypes>({
	commentsList: [],
});
