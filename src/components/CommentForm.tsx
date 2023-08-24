import { useState, useContext } from 'react';
import ActionBtn from './buttons/ActionBtn';
import { CommentContext } from '../context/comment-context';

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
	const [textareaValue, setTextareaValue] = useState('');

	const commentCtx = useContext(CommentContext);

	const getValueHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextareaValue(event.currentTarget.value);
	};

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		commentCtx.addComment(textareaValue, null, null);
		setTextareaValue('');
	};

	return (
		<form className='component-box' onSubmit={submitHandler}>
			<textarea
				className='textarea'
				placeholder={placeholder}
				onChange={getValueHandler}
				value={textareaValue}
			></textarea>
			<img src={avatar} className='avatar form-avatar' alt="User's avatar" />
			<ActionBtn
				text={buttonText}
				className='form-btn'
				type='submit'
				isDisabled={textareaValue === ''}
			/>
		</form>
	);
};

export default CommentForm;
