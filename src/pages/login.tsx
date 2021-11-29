import React, {useState} from "react";
import {NextPage} from "next";

const StatusMessage: React.FC<{message: string}> = ({message}) => {

    return (
        message.length > 0 ? (
            <div>
                <p>{message}</p>
            </div>
        ) : null
    );
}

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [statusMessage, setStatusMessage] = useState<string>("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("submitting login details");
        setStatusMessage("success");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                <input type={"email"} placeholder={"email"} value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <input type={"password"} placeholder={"password"} value={password} onChange={(e) => {setPassword(e.target.value)}} />
                <br />
                <button type={"submit"}>Login</button>
            </form>
            <br />
            <StatusMessage message={statusMessage} />
        </div>
    );
}

const LoginPage: NextPage = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Login</h1>
            <Login />
        </div>
    );
}

export default LoginPage;