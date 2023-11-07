import Goal from "../Goal.tsx";
import { type MyGoal} from "../../App.tsx";
import "./GoalList.css"

type GoalListProps = {
    goals: MyGoal[],
    onDeleteGoal: (id: number) => void;
}
const GoalList = ({goals, onDeleteGoal}: GoalListProps) => {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <Goal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                        <p>{goal.description}</p>
                    </Goal>
                </li>
            ))}
        </ul>
    );
};

export default GoalList;