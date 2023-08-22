import { useState } from 'react';

import './ReactionBtn.css';

interface ReactionBtnProps {
	score: string;
}

const ReactionBtn: React.FC<ReactionBtnProps> = ({ score }) => {
	const [commentScore, setCommentScore] = useState(+score);
	const [isScoredUp, setIsScoredUp] = useState(false);
	const [isScoredDown, setIsScoredDown] = useState(false);

	const onScore = (num: number, event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		if ((isScoredUp && num === 1) || (isScoredDown && num === -1)) {
			setCommentScore(+score);
			setIsScoredUp(false);
			setIsScoredDown(false);
		} else {
			setCommentScore(commentScore + num);
			setIsScoredUp(num === 1);
			setIsScoredDown(num === -1);
		}
	};

	return (
		<div className='reaction-btn'>
			<button
				className={isScoredUp ? 'active-btn' : ''}
				onClick={(event) => onScore(1, event)}
			>
				+
			</button>
			<p>{commentScore}</p>
			<button
				className={isScoredDown ? 'active-btn' : ''}
				onClick={(event) => onScore(-1, event)}
			>
				-
			</button>
		</div>
	);
};

export default ReactionBtn;
