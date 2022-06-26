
export interface StatusBarProps {
    status: string[],
    currentStatus: string;
    onChangeStatusClicked: (status: string) => void;
}