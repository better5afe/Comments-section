import CommentContextProvider from './context/CommentContextProvider';
import CommentsList from './components/CommentsList';

const App = () => {
	return (
		<CommentContextProvider>
			<h1>App Title</h1>
			<CommentsList />
		</CommentContextProvider>
	);
};

export default App;
