import { IconType } from "react-icons/lib";

type turnButtonProps = {
    tooltip: string;
    onClick: () => void;
    icon: IconType;
}

export type ControllerListProps = {
    title: string;
    children: React.ReactNode;
    isControlled?: boolean;
    turnOn?: turnButtonProps;
    turnOff?: turnButtonProps;
}