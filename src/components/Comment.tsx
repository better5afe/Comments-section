import { useState, useEffect, useContext } from 'react';
import { Comment as CommentType } from '../models/comment';
import ReactionBtn from './buttons/ReactionBtn';
import CommentActionsBtns from './CommentActionBtns';
import CommentForm from './CommentForm';
import CommentEdit from './CommentEdit';
import { CommentContext } from '../context/comment-context';

import './Comment.css';

interface CommentProps {
	key: string;
	id: string;
	username: string;
	avatar: string;
	userId: string;
	body: string;
	parentId: null | string;
	createdAt: string;
	score: string;
	replies: CommentType[];
	replyingTo: null | string;
	commentLevel: number;
}

const Comment: React.FC<CommentProps> = ({
	id,
	username,
	avatar,
	userId,
	body,
	parentId,
	createdAt,
	score,
	replies,
	replyingTo,
	commentLevel,
}) => {
	const [nestingLevel, setNestingLevel] = useState(0);

	const commentCtx = useContext(CommentContext);

	useEffect(() => {
		if (parentId === null) {
			setNestingLevel(0);
		} else if (parentId !== null && nestingLevel === 0) {
			setNestingLevel(1);
		} else if (parentId !== null && commentLevel === 1) {
			setNestingLevel(2);
		} else if (parentId !== null && commentLevel === 2) {
			setNestingLevel(3);
		}
	}, [parentId, nestingLevel, commentLevel]);

	const commentReplies = replies.filter((reply) => reply.parentId === id);

	return (
		<>
			<div className='component-box' id={id}>
				<div className='comment-main'>
					<div className='comment-header'>
						<div className='comment-info'>
							<img src={avatar} className='avatar' alt="User's avatar" />
							<p className='username'>{username}</p>
							{userId === '4' ? <p className='badge'>you</p> : ''}
							<p className='created-at'>{createdAt}</p>
						</div>
						<CommentActionsBtns
							className='desktop-actions'
							userId={userId}
							nestingLevel={commentLevel}
							commentId={id}
						/>
					</div>
					<div className='comment-body'>
						{commentCtx.isEditing && id === commentCtx.currentCommentId ? (
							<CommentEdit initialValue={body} />
						) : (
							<p className='comment-text'>
								{replyingTo && (
									<span className='replying-to'>@{replyingTo} </span>
								)}
								{body}
							</p>
						)}
					</div>
				</div>
				<div className='comment-aside'>
					<ReactionBtn score={score} />
					<CommentActionsBtns
						className='mobile-actions'
						userId={userId}
						nestingLevel={commentLevel}
						commentId={id}
					/>
				</div>
			</div>
			{commentCtx.isReplying && id === commentCtx.currentCommentId && (
				<CommentForm
					placeholder='Add a reply'
					buttonText='reply'
					commentId={id}
					username={username}
				/>
			)}
			{replies.length > 0 && (
				<ul className='nested-replies'>
					{commentReplies
						.map((reply) => (
							<li>
								<Comment
									key={reply.id}
									id={reply.id}
									username={reply.user.username}
									avatar={reply.user.userImg}
									userId={reply.user.userId}
									body={reply.body}
									parentId={reply.parentId}
									createdAt={reply.createdAt}
									score={reply.score}
									replies={replies}
									replyingTo={reply.replyingTo}
									commentLevel={nestingLevel}
								/>
							</li>
						))
						.reverse()}
				</ul>
			)}
		</>
	);
};

export default Comment;
