import './DeleteBtn.css';

interface DeleteBtnProps {
	onClick: () => void;
}

const DeleteBtn: React.FC<DeleteBtnProps> = ({ onClick }) => {
	return (
		<button className='delete-btn' onClick={onClick}>
			<i className='fa-solid fa-trash-can'></i> Delete
		</button>
	);
};

export default DeleteBtn;
