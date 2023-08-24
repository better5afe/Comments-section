import './ActionBtn.css';

interface ActionBtnProps {
	text: string;
	className?: string;
	onClick?: () => void;
	type: 'button' | 'submit';
	isDisabled?: boolean;
}

const ActionBtn: React.FC<ActionBtnProps> = ({
	text,
	className,
	onClick,
	type,
	isDisabled,
}) => {
	return (
		<button
			className={`action-btn ${className}`}
			value={text}
			onClick={onClick}
			type={type}
			disabled={isDisabled}
		>
			{text}
		</button>
	);
};

export default ActionBtn;
