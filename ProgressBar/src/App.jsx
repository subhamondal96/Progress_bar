import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const ProgressBar = ({ progress }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => setAnimatedProgress(progress), 100);
    }, [progress]);

    return (
        <div className="outer">
            <div
                className="inner"
                style={{
                    // width: `${progress}%`,
                    transform: `translateX(${animatedProgress - 100}%)`,
                    color: animatedProgress < 5 ? "black" : "white",
                }}
                role="progressbar"
                aria-valuenow={animatedProgress}
                aria-valuemax="100"
                aria-valuemin="0"
            >
                {animatedProgress}%
            </div>
        </div>
    );
};

export default function App() {
    const bars = [1, 5, 10, 30, 55, 75, 90, 100];

    return (
        <>
            <div className="App">
                <h1>Progress Bar</h1>
                {bars.map((value) => (
                    <ProgressBar key={value} progress={value} />
                ))}
            </div>
        </>
    );
}
