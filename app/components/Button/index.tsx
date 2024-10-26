import './style.css'

type ButtonProps = {
    text?: string;
    icon?: React.ReactNode;
    color?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, color, onClick }) => {
    return (
        <button className={"button" + (color ? " " + color : "")} onClick={onClick}>
            {icon && <span>{icon}</span>}
            {text && <span>{text}</span>}
        </button>
    );
}

export default Button;
