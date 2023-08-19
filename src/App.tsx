import CommentContextProvider from './context/CommentContextProvider';
import CommentsList from './components/CommentsList';

const App = () => {
	return (
		<CommentContextProvider>
			<CommentsList />
		</CommentContextProvider>
	);
};

export default App;
