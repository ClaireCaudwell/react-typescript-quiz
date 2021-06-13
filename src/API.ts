
import { shuffleArray } from "./utils";

// type for each question based on the api structure for one question in the result array from the api
export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
};

// helps to combine to modify the response we get back that includes both the correct and incorrect answers
// & adds it to the Question type above, so like inserting a type into the questions type above
export type QuestionState = Question & { answers: string[] };

// enum helps to specify a set of values to check when doing the fetch to the api in this case
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
};

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    // double await as it awaits the fetch first and then the json response
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers, 
                question.correct_answer
            ]), 
        }
    ));
};