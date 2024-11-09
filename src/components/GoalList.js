import React from 'react';

function GoalList({ goals }) {
    return (
        <ul className="list-group">
            {goals.map((goal, index) => (
                <li key={index} className="list-group-item">
                    {goal}
                </li>
            ))}
        </ul>
    );
}

export default GoalList;
