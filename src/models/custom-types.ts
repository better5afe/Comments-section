export interface User {
	username: string;
	userImg: string;
	userId: string;
}

export interface Comment {
	id: string;
	body: string;
	user: User;
	parentId: null | string;
	createdAt: string;
	score: string;
	replyingTo: null | string;
}
