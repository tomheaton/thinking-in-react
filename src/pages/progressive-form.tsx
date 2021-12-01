import React, {useState} from "react";
import {NextPage} from "next";

type ControlProps = {
    current: number,
    setCurrent: React.Dispatch<React.SetStateAction<number>>,
    total: number
}

type Question = {
    question: string
    type: string
}

const QUESTIONS: Question[] = [
    { question: "What is an apple?", type: "test" },
    { question: "What colour is a banana?", type: "test" },
    { question: "What is gonk?", type: "test" }
]

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
    const [answers, setAnswers] = useState<string[]>([]);

    const total = QUESTIONS.length;

    const handleAnswerChange = (e: any) => {
        let _answer = e.target.value;
        let _answers = [...answers];
        _answers[current-1] = _answer;
        setAnswers(_answers);
    }

    return (
        <div>
            <form>
                <p>{QUESTIONS[current-1].question}</p>
                <input type={"text"} placeholder={"enter your answer"} value={answers[current-1]} onChange={handleAnswerChange} />
            </form>
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