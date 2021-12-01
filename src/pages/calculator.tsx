import {NextPage} from "next";
import React, {useState} from "react";
import styles from "../styles/Calculator.module.css";

const CalcButton: React.FC<{text: string, onClick: any}> = ({text, onClick}) => {

    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

const Calculator: React.FC = () => {

    const [data, setData] = useState<string | number>("0");

    return (
        <div>
            <div className={styles.data}>
                <p>{data}</p>
            </div>
            <table className={styles.calculator}>
                <tr>
                    <td><button>{"MC"}</button></td>
                    <td><button>{"M-"}</button></td>
                    <td><button>{"M+"}</button></td>
                    <td><button>{"MR"}</button></td>
                </tr>
                <tr>
                    <td><button>{"C"}</button></td>
                    <td><button>{"/"}</button></td>
                    <td><button>{"*"}</button></td>
                    <td><button>{"DEL"}</button></td>
                </tr>
                <tr>
                    <td><button>{"7"}</button></td>
                    <td><button>{"8"}</button></td>
                    <td><button>{"9"}</button></td>
                    <td><button>{"-"}</button></td>
                </tr>
                <tr>
                    <td><button>{"4"}</button></td>
                    <td><button>{"5"}</button></td>
                    <td><button>{"6"}</button></td>
                    <td><button>{"+"}</button></td>
                </tr>
                <tr>
                    <td><button>{"1"}</button></td>
                    <td><button>{"2"}</button></td>
                    <td><button>{"3"}</button></td>
                    <td rowSpan={2}><button>{"="}</button></td>
                </tr>
                <tr>
                    <td><button>{"%"}</button></td>
                    <td><button>{"0"}</button></td>
                    <td><button>{"."}</button></td>
                </tr>
            </table>
        </div>
    );
}

const CalculatorPage: NextPage = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Calculator</h1>
            <Calculator />
        </div>
    );
};

export default CalculatorPage;