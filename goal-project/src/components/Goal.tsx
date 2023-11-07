import "./Goal.css"
import {ReactNode} from "react";

interface GoalProps {
    title: string;
    id: number
    children: ReactNode;
    onDelete: (id: number) => void;
}
const Goal = ({title, children, onDelete, id}: GoalProps) => {
    return (
        <div className={"goal-card"}>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default Goal;