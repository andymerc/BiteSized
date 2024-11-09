import React, { useState } from 'react';

function GoalInput({ onAddGoal }) {
    const [input, setInput] = useState('');

    const handleAddGoal = () => {
        if (input.trim()) {
            onAddGoal(input);
            setInput(''); // Clear the input field
        }
    };

    return (
        <div className="text-center mb-3">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a new goal"
                className="form-control d-inline w-50"
            />
            <button onClick={handleAddGoal} className="btn btn-primary ml-2">
                Add Goal
            </button>
        </div>
    );
}

export default GoalInput;