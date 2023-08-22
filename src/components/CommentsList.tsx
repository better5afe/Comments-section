import { useContext } from 'react';
import { CommentContext } from '../context/comment-context';
import Comment from './Comment';

import './CommentsList.css';

const CommentsList = () => {
	const commentCtx = useContext(CommentContext);

	const rootComments = commentCtx.comments.filter(
		(comment) => comment.parentId === null
	);

	const replies = commentCtx.comments.filter(
		(comment) => comment.parentId !== null
	);

	return (
		<div className='comments-list'>
			{rootComments.map((comment) => (
				<Comment
					key={comment.id}
					id={comment.id}
					username={comment.user.username}
					avatar={comment.user.userImg}
					userId={comment.user.userId}
					body={comment.body}
					parentId={comment.parentId}
					createdAt={comment.createdAt}
					score={comment.score}
					replies={replies}
					replyingTo={comment.replyingTo}
					commentLevel={0}
				/>
			))}
		</div>
	);
};

export default CommentsList;
