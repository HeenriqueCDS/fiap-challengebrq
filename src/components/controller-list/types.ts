import { IconType } from "react-icons";


type turnButtonProps = {
    tooltip: string;
    onClick: () => void;
}

export type ControllerListProps = {
    title: string;
    children: React.ReactNode;
    isControlled?: boolean;
    turnOn?: turnButtonProps;
    turnOff?: turnButtonProps;
    turnOnIcon?: IconType;
    turnOffIcon?: IconType;
}