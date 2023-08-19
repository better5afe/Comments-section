import React from 'react';
import { Comment } from '../models/comment';

interface ContextTypes {
	rootComments: Comment[];
	replies: Comment[];
}

export const CommentContext = React.createContext<ContextTypes>({
	rootComments: [],
	replies: [],
});
