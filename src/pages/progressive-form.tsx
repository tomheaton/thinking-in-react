import React, {useState} from "react";
import {NextPage} from "next";

type ControlProps = {
    current: number,
    setCurrent: React.Dispatch<React.SetStateAction<number>>,
    total: number
}

type QuestionFormProps = {
    question: string,
    answer: string,
    setAnswer: React.Dispatch<React.SetStateAction<string>>
}

type Question = {
    question: string
    type: string
}

const QUESTIONS: Question[] = [
    { question: "What is an apple?", type: "test" },
    { question: "What colour is a banana?", type: "test" }
]

const QuestionForm: React.FC<QuestionFormProps> = ({question, answer, setAnswer}) => {

    return (
        <form>
            <p>{question}</p>
            <input type={"text"} placeholder={"enter your answer"} value={answer} onChange={(e) => {setAnswer(e.target.value)}}/>
        </form>
    );
}
const Controls: React.FC<ControlProps> = ({current, setCurrent, total}) => {

    const handleBack = () => {
        console.log("back");
        setCurrent(current > 1 ? current-1 : 1);
    }

    const handleForward = () => {
        console.log("forward");
        setCurrent(current < total ? current+1 : total);
    }

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", minWidth: "200px"}}>
            <button onClick={handleBack}>Back</button>
            <p>{current}/{total}</p>
            <button onClick={handleForward}>Forward</button>
        </div>
    );
}

const ProgressiveForm: React.FC = () => {

    const [current, setCurrent] = useState<number>(1);

    const total = QUESTIONS.length;

    return (
        <div>
            <QuestionForm question={QUESTIONS[current-1].question}/>
            <br />
            <Controls current={current} setCurrent={setCurrent} total={total} />
        </div>
    );
}

const ProgressiveFormPage: NextPage = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Progressive Form</h1>
            <ProgressiveForm />
        </div>
    );
}

export default ProgressiveFormPage;