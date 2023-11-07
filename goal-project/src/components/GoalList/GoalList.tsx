import Goal from "../Goal.tsx";
import {type MyGoal} from "../../App.tsx";
import "./GoalList.css"
import InfoBox from "../Info Box/InfoBox.tsx";
import {type ReactNode} from "react";

type GoalListProps = {
    goals: MyGoal[],
    onDeleteGoal: (id: number) => void;
}
const GoalList = ({goals, onDeleteGoal}: GoalListProps) => {
    if (goals.length === 0) {
        return (
            <InfoBox mode={"hint"}>
                You have no goals yet. Start now!
            </InfoBox>
        )
    }

    let warningBox: ReactNode;

    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode={"warning"}>
                You're collecting a lot of goals. Don't put too much on your plate!
            </InfoBox>
        )
    }

    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <Goal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                            <p>{goal.description}</p>
                        </Goal>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default GoalList;