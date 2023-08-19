import { useContext } from 'react';
import { CommentContext } from '../context/comment-context';
import Comment from './Comment';

const CommentsList = () => {
	const commentCtx = useContext(CommentContext);

	return (
		<div className='comments-list'>
			{commentCtx.rootComments.map((rootComment) => (
				<Comment
					key={rootComment.id}
					id={rootComment.id}
					username={rootComment.user.username}
					avatar={rootComment.user.userImg}
					userId={rootComment.user.userId}
					body={rootComment.body}
					createdAt={rootComment.createdAt}
					score={rootComment.score}
				/>
			))}
			{/* <Comment /> */}
		</div>
	);
};

export default CommentsList;
