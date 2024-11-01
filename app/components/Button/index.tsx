import styled from "styled-components";

const ButtonTag = styled.button<{ $primary?:boolean }>`
    background-color: ${props => props.$primary ? "#3B82F6" : "#EBEBEB"};
    width: 100%;
    padding: ${props => props.$primary ? "14px 0" : "9.9px !important"};
    color: #ffffff;
    font-weight: bold;
    border-radius: 6px;

    & span {
        display: ruby;
    }
`;

type ButtonProps = {
    text?: string;
    icon?: React.ReactNode;
    primary?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, primary=true, onClick }) => {
    return (
        <ButtonTag className="button" onClick={onClick} $primary={primary}>
            {icon && <span>{icon}</span>}
            {text && <span>{text}</span>}
        </ButtonTag>
    );
}

export default Button;
