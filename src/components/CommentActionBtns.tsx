import { useContext } from 'react';
import DeleteBtn from './buttons/DeleteBtn';
import EditBtn from './buttons/EditBtn';
import ReplyBtn from './buttons/ReplyBtn';
import { CommentContext } from '../context/comment-context';

import './CommentActionsBtns.css';

interface CommentActionsBtnsProps {
	className: string;
	userId: string;
	nestingLevel: number;
	commentId: string;
}

const CommentActionsBtns: React.FC<CommentActionsBtnsProps> = ({
	className,
	userId,
	nestingLevel,
	commentId,
}) => {
	const commentCtx = useContext(CommentContext);

	const ownCommentActions = (
		<div className={className}>
			<DeleteBtn
				onClick={() => {
					commentCtx.openModal(commentId);
				}}
			/>
			<EditBtn />
		</div>
	);

	const differentUserCommentActions = (
		<div className={className}>
			{nestingLevel === 2 ? (
				''
			) : (
				<ReplyBtn
					onClick={() => {
						commentCtx.openReplyForm(commentId);
					}}
				/>
			)}
		</div>
	);

	return (
		<>{userId === '4' ? ownCommentActions : differentUserCommentActions}</>
	);
};

export default CommentActionsBtns;
