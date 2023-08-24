import { useContext } from 'react';
import ReactDOM from 'react-dom';
import ActionBtn from './buttons/ActionBtn';
import { CommentContext } from '../context/comment-context';

import './Modal.css';

const Modal = () => {
	const commentCtx = useContext(CommentContext);

	return (
		<>
			{ReactDOM.createPortal(
				<div
					className={commentCtx.modalStatus ? 'modal-background' : 'disabled'}
				>
					<div className='modal-box'>
						<h3>Delete comment</h3>
						<p>
							Are you sure you want to delete this comment? This will remove the
							comment and can't be undone.
						</p>
						<div className='modal-btns'>
							<ActionBtn
								className='modal-cancel'
								text='no, cancel'
								onClick={commentCtx.hideModal}
								type='button'
							/>
							<ActionBtn
								className='modal-delete'
								text='yes, delete'
								onClick={commentCtx.deleteComment}
								type='button'
							/>
						</div>
					</div>
				</div>,
				document.getElementById('modal')!
			)}
		</>
	);
};

export default Modal;
