import React from "react";

import { Wrapper } from  "./QuestionCard.styles";

// Types
import { AnswerObject } from "../App";

// props that'll be sent in to this component
type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer : AnswerObject | undefined,
    questionNr: number,
    totalQuestions: number,
};

// Specify that in typescript that this is a functional component React.FC and then specify that we'll be passing in the props above by adding <Props>
const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) => {
    return (
        <Wrapper>
            <p className="number">Question: {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => (
                    <div key={answer}>
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}} />
                        </button>
                    </div>
                ))}  
            </div>  
        </Wrapper>
    );
};

export default QuestionCard;