import './ReplyBtn.css';

interface ReplyBtnProps {
	onReply: () => void;
}

const ReplyBtn: React.FC<ReplyBtnProps> = ({ onReply }) => {
	return (
		<button className='reply-btn' onClick={onReply}>
			<i className='fa-solid fa-reply'></i> Reply
		</button>
	);
};

export default ReplyBtn;
