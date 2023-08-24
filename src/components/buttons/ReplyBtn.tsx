import './ReplyBtn.css';

interface ReplyBtnProps {
	onClick: () => void;
}

const ReplyBtn: React.FC<ReplyBtnProps> = ({ onClick }) => {
	return (
		<button className='reply-btn' onClick={onClick}>
			<i className='fa-solid fa-reply'></i> Reply
		</button>
	);
};

export default ReplyBtn;
