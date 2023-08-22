import DeleteBtn from './buttons/DeleteBtn';
import EditBtn from './buttons/EditBtn';
import ReplyBtn from './buttons/ReplyBtn';

import './CommentActionsBtns.css';

interface CommentActionsBtnsProps {
	className: string;
	userId: string;
	nestingLevel: number;
}

const CommentActionsBtns: React.FC<CommentActionsBtnsProps> = ({
	className,
	userId,
	nestingLevel,
}) => {
	const replyHandler = () => {
		console.log(nestingLevel);
	};

	const ownCommentActions = (
		<div className={className}>
			<DeleteBtn />
			<EditBtn />
		</div>
	);

	const differentUserCommentActions = (
		<div className={className}>
			{nestingLevel === 2 ? '': <ReplyBtn onReply={replyHandler} />}
		</div>
	);

	return (
		<>{userId === '4' ? ownCommentActions : differentUserCommentActions}</>
	);
};

export default CommentActionsBtns;
