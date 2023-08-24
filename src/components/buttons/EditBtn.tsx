import './EditBtn.css';

interface EditBtnProps {
	onClick: () => void;
}

const EditBtn: React.FC<EditBtnProps> = ({ onClick }) => {
	return (
		<button className='edit-btn' onClick={onClick}>
			<i className='fa-solid fa-pen'></i> Edit
		</button>
	);
};

export default EditBtn;
