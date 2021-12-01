import {NextPage} from "next";
import React from "react";

const Calculator: React.FC = () => {

    return (
        <div>
            <div>
                data
            </div>
            <table>
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