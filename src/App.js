import React, { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

function App() {
    const [goals, setGoals] = useState([]);

    const addGoal = (goal) => {
        setGoals([...goals, goal]);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">BiteSized</h1>
            <GoalInput onAddGoal={addGoal} />
            <GoalList goals={goals} />
        </div>
    );
}

export default App;

