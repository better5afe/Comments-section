import { User, Comment as CommentInterface } from './custom-types';

export class Comment implements CommentInterface {
	constructor(
		public id: string,
		public body: string,
		public user: User,
		public parentId: null | string,
		public createdAt: string,
		public score: string,
		public replyingTo: null | string
	) {
		this.id = id;
		this.body = body;
		this.user = user;
		this.parentId = parentId;
		this.createdAt = createdAt;
		this.score = score;
		this.replyingTo = replyingTo
	}
}
