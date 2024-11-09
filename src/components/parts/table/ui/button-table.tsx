import styled from "styled-components";
import { ButtonTag } from "../../../ui/button";

const ButtonTableTag = styled(ButtonTag)`
    width: 100%;
`;

type ButtonProps = {
    text?: string;
    icon?: React.ReactNode;
    primary?: boolean;
    onClick?: () => void;
}

const ButtonTable: React.FC<ButtonProps> = ({ text, icon, primary=true, onClick }) => {
    return (
        <ButtonTableTag className="button" onClick={onClick} $primary={primary}>
            {icon && <span>{icon}</span>}
            {text && <span>{text}</span>}
        </ButtonTableTag>
    );
}

export default ButtonTable;
