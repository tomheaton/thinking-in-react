import React, {useState} from "react";
import {NextPage} from "next";

type Question = {
    question: string
    type: string
}

const QUESTIONS: Question[] = [
    { question: "What is an apple?", type: "test" },
    { question: "What colour is a banana?", type: "test" }
]

const Controls: React.FC<{current: number, total: number}> = ({current, total}) => {

    const handleBack = () => {
        console.log("back");
    }

    const handleForward = () => {
        console.log("forward");
    }

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", minWidth: "200px"}}>
            <button onClick={handleBack}>Back</button>
            <p>{current}/{total}</p>
            <button onClick={handleForward}>Forward</button>
        </div>
    );
}

const ProgressiveForm: React.FC = () => {

    const [current, setCurrent] = useState<number>(0);

    const total = QUESTIONS.length;

    return (
        <div>
            <Controls current={current} total={total}/>
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