import CommentContextProvider from './context/CommentContextProvider';
import CommentsList from './components/CommentsList';
import CommentForm from './components/CommentForm';
import Modal from './components/Modal';

const App = () => {
	return (
		<div className='app-wrapper'>
			<CommentContextProvider>
				<CommentsList />
				<CommentForm placeholder='Add a comment...' buttonText='send' commentId={null} username={null} />
				<Modal />
			</CommentContextProvider>
		</div>
	);
};

export default App;
