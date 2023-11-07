import './App.css'
import goalImg from "./assets/goal.png"
import Header from "./components/header/Header.tsx";
import {useState} from "react";
import GoalList from "./components/GoalList/GoalList.tsx";
import NewGoal from "./components/form/NewGoal.tsx";


export type MyGoal = {
    title: string,
    description: string,
    id: number

}
function App() {
    const [goals, setGoals] = useState<MyGoal[]>([]);

    const handleAddGoal = (goal: string, description: string) => {
        setGoals((prevState) => {
            const newGoal: MyGoal = {
                id: Math.random(),
                title: goal,
                description: description
            }
            return [...prevState,newGoal]
        })
    }

    const handleDeleteGoal = (id: number) => {
        setGoals((prevState) => (
            prevState.filter((goal) => goal.id !== id)
        ))
    }

  return (
    <main>
        <Header image={{src: goalImg, alt: 'A list of goals'}}>
            <h1>Your Goals</h1>
        </Header>
        <NewGoal onAddGoal={handleAddGoal}></NewGoal>
        <GoalList goals={goals} onDeleteGoal={handleDeleteGoal}></GoalList>


    </main>
  )
}

export default App
