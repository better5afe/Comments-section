import { useState } from 'react';

interface CommentEditProps {
	initialValue: string;
}

const CommentEdit: React.FC<CommentEditProps> = ({ initialValue }) => {
	const [textareaValue, setTeaxtareaValue] = useState(initialValue);

	const getValueHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTeaxtareaValue(event.currentTarget.value);
	};

	return (
		<>
            <textarea
                className='textarea edit-textarea'
				placeholder='Edit your comment'
				value={textareaValue}
                onChange={getValueHandler}
                
			></textarea>
		</>
	);
};

export default CommentEdit;
