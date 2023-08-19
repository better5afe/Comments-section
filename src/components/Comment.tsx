import ReactionBtn from './buttons/ReactionBtn';
import CommentActionsBtns from './CommentActionBtns';

import './Comment.css';

interface CommentProps {
	key: string;
	id: string;
	username: string;
	avatar: string;
	userId: string;
	body: string;
	createdAt: string;
	score: string;
}

const Comment: React.FC<CommentProps> = ({
	key,
	id,
	username,
	avatar,
	userId,
	body,
	createdAt,
	score,
}) => {
	return (
		<div className='comment-box' key={key}>
			<div className='comment-main'>
				<div className='comment-header'>
					<div className='comment-info'>
						<img src={avatar} className='avatar' alt="User's avatar" />
						<p className='username'>{username}</p>
						{userId === '4' ? <p className='badge'>you</p> : ''}
						<p className='created-at'>{createdAt}</p>
					</div>
					<CommentActionsBtns className='desktop-actions' />
				</div>
				<div className='comment-body'>
					<p className='comment-text'>{body}</p>
				</div>
			</div>
			<div className='comment-aside'>
				<ReactionBtn score={score} />
				<CommentActionsBtns className='mobile-actions' />
			</div>
		</div>
	);
};

export default Comment;
