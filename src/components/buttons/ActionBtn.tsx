import './ActionBtn.css';

interface ActionBtnProps {
	text: string;
	className?: string;
}

const ActionBtn: React.FC<ActionBtnProps> = ({ text, className }) => {
	return <button className={`action-btn ${className}`}>{text}</button>;
};

export default ActionBtn;