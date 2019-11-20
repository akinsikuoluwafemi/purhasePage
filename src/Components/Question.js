import React from 'react';

function Question (props) {
    return (
        <div className="question">
            <p className="question-one">{props.q1}</p>
            <p className="question-two">{props.q2}</p>
        </div>
    )
}

export default Question;