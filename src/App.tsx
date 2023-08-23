import CommentContextProvider from './context/CommentContextProvider';
import CommentsList from './components/CommentsList';
import CommentForm from './components/CommentForm';

const App = () => {
	return (
		<div className='app-wrapper'>
			<CommentContextProvider>
			<CommentsList />
			<CommentForm placeholder='Add a comment...' buttonText='send' />
		</CommentContextProvider>
		</div>
	);
};

export default App;
