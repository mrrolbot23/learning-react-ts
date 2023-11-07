import "./NewGoal.css"
import {type FormEvent, useRef} from "react";
import "./NewGoal.css"

type NewGoalProps = {
    onAddGoal: (goal: string, description: string) => void;
};

const NewGoal = ({onAddGoal}: NewGoalProps) => {
    const goal = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const enteredGoal = goal.current.value;
        const enteredDescription = description.current.value;

        event.currentTarget.reset();

        onAddGoal(enteredGoal, enteredDescription);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="goal-title">
                    Goal Title
                    <input type="text" name="goal-title" id="goal-title" ref={goal} placeholder={"Enter Goal Title"}/>
                </label>
                <label htmlFor="goal-description">
                    Goal Description
                    <input type="text" name="goal-description" id="goal-description" ref={description} placeholder={"Enter your Goal"}/>
                </label>
                <button>Add Goal</button>
            </form>
        </div>
    );
};

export default NewGoal;