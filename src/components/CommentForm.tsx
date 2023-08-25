import { useState, useContext } from 'react';
import ActionBtn from './buttons/ActionBtn';
import { CommentContext } from '../context/comment-context';

import './CommentForm.css';
const avatar = require('../assets/images/image-juliusomo.png');

interface CommentFormProps {
	placeholder: string;
	buttonText: string;
	commentId: string | null;
	username: string | null;
	initialValue: string;
}

const CommentForm: React.FC<CommentFormProps> = ({
	placeholder,
	buttonText,
	commentId,
	username,
	initialValue,
}) => {
	const [textareaValue, setTextareaValue] = useState(initialValue);

	const commentCtx = useContext(CommentContext);

	const getValueHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextareaValue(event.currentTarget.value);
	};

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (buttonText === 'send') {
			commentCtx.addComment(textareaValue, null, null);
		} else if (buttonText === 'reply') {
			commentCtx.addComment(textareaValue, commentId, username);
		} else if (buttonText === 'update') {
			commentCtx.editComment(textareaValue, commentId!);
		}
		setTextareaValue('');
	};

	return (
		<form
			className={
				buttonText === 'update' ? 'component-box edit-box' : 'component-box'
			}
			onSubmit={submitHandler}
		>
			<textarea
				className={
					buttonText === 'update' ? 'textarea edit-textarea' : 'textarea'
				}
				placeholder={placeholder}
				onChange={getValueHandler}
				value={textareaValue}
			></textarea>
			{buttonText === 'update' ? (
				''
			) : (
				<img src={avatar} className='avatar form-avatar' alt="User's avatar" />
			)}
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
