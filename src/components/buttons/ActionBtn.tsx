import './ActionBtn.css';

interface ActionBtnProps {
	text: string;
	className?: string;
	onClick?: () => void;
	type: 'button' | 'submit';
}

const ActionBtn: React.FC<ActionBtnProps> = ({
	text,
	className,
	onClick,
	type,
}) => {
	return (
		<button
			className={`action-btn ${className}`}
			value={text}
			onClick={onClick}
			type={type}
		>
			{text}
		</button>
	);
};

export default ActionBtn;
