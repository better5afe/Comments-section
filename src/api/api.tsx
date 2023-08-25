import { Comment as CommentClass } from '../models/comment';

export const getComments = async () => {
	return [
		new CommentClass(
			'1',
			`Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.`,
			{
				username: 'amyrobson',
				userImg: require('../assets/images/image-amyrobson.png'),
				userId: '1',
			},
			null,
			'1 month ago',
			'12',
			null
		),
		new CommentClass(
			'2',
			`Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!`,
			{
				username: 'maxblagun',
				userImg: require('../assets/images/image-maxblagun.png'),
				userId: '2',
			},
			null,
			'2 weeks ago',
			'5',
			null
		),
		new CommentClass(
			'3',
			`If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.`,
			{
				username: 'ramsesmiron',
				userImg: require('../assets/images/image-ramsesmiron.png'),
				userId: '3',
			},
			'2',
			'1 week ago',
			'4',
			'maxblagun'
		),
		new CommentClass(
			'4',
			`I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.`,
			{
				username: 'juliusomo',
				userImg: require('../assets/images/image-juliusomo.png'),
				userId: '4',
			},
			'3',
			'2 days ago',
			'2',
			'ramsesmiron'
		),
		new CommentClass(
			'5',
			`That's true! Just keep going and practicing!`,
			{
				username: 'amyrobson',
				userImg: require('../assets/images/image-amyrobson.png'),
				userId: '1',
			},
			'4',
			'1 day ago',
			'1',
			'juliusomo'
		),
	];
};

export const addComment = (
	body: string,
	parentId: string | null,
	replyingTo: string | null
) => {
	const newComment = new CommentClass(
		Math.random().toString(),
		body,
		{
			username: 'juliusomo',
			userImg: require('../assets/images/image-juliusomo.png'),
			userId: '4',
		},
		parentId,
		'just now',
		'0',
		replyingTo
	);

	return newComment;
};

export const deleteComment = (comments: CommentClass[], id: string) => {
	const updatedComments = comments.filter((comment) => comment.id !== id);

	return updatedComments;
};

export const editComment = (
	comments: CommentClass[],
	body: string,
	id: string
) => {
	const updatedComments = comments.map((comment) => {
		if (comment.id === id) {
			return { ...comment, body: body };
		}
		return comment;
	});
	return updatedComments;
};
