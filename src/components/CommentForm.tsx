import ActionBtn from './buttons/ActionBtn';
import './CommentForm.css';

const avatar = require('../assets/images/image-juliusomo.png');

interface CommentFormProps {
	placeholder: string;
	buttonText: string;
}

const CommentForm: React.FC<CommentFormProps> = ({
	placeholder,
	buttonText,
}) => {
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
	};

	return (
		<form className='component-box' onSubmit={submitHandler}>
			<textarea className='textarea' placeholder={placeholder}></textarea>
			<img src={avatar} className='avatar form-avatar' alt="User's avatar" />
			<ActionBtn text={buttonText} className='form-btn' />
		</form>
	);
};

export default CommentForm;
