import { useState, useEffect } from "react";

function App1() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date()); // Update every second
        }, 1000);

        return () => clearInterval(intervalId); // Clean up
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Current Time</h1>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default App1;