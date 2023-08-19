import DeleteBtn from './buttons/DeleteBtn';
import EditBtn from './buttons/EditBtn';
import ReplyBtn from './buttons/ReplyBtn';

import './CommentActionsBtns.css';

interface CommentActionsBtnsProps {
	className: string;
}

const CommentActionsBtns: React.FC<CommentActionsBtnsProps> = ({
	className,
}) => {
	return (
		<div className={`${className}`}>
			{/* <ReplyBtn /> */}
			<DeleteBtn />
			<EditBtn />
		</div>
	);
};

export default CommentActionsBtns;
