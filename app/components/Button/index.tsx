import './style.css'

type ButtonProps = {
    text?: string;
    icon?: React.ReactNode;
    classes?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, classes, onClick }) => {
    return (
        <button className={"button" + (classes ? " " + classes : "")} onClick={onClick}>
            {icon && <span>{icon}</span>}
            {text && <span>{text}</span>}
        </button>
    );
}

export default Button;
