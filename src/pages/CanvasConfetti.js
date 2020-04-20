import React, { useRef, useEffect } from "react";
// canvas - confetti
// var myCanvas = document.createElement("canvas");
// document.appendChild(myCanvas);

// var myConfetti = confetti.create(myCanvas, { resize: true });
// myConfetti({
//   particleCount: 100,
//   spread: 160
//   // any other options from the global
//   // confetti function
// });

const CanvasConfetti = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        import("canvas-confetti").then(confetti => {
            const myConfetti = confetti.create(canvasRef.current, {
                resize: true
            });
            myConfetti({
                particleCount: 100,
                spread: 160
                // any other options from the global
                // confetti function
            });
        });
    }, []);

    return <canvas ref={canvasRef} />;
};

export default CanvasConfetti;
