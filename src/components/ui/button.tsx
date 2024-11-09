import styled from "styled-components";

export const ButtonTag = styled.button<{ $primary?:boolean }>`
    background-color: ${props => props.$primary ? "#3B82F6" : "#EBEBEB"};
    width: auto;
    padding: ${props => props.$primary ? "14px 24px" : "9.9px !important"};
    color: #ffffff;
    font-weight: bold;
    border-radius: 6px;
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
