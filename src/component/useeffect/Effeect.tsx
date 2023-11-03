import React, { useEffect, useState } from 'react';
import "./Effect.css";

const Effeect = () => {
    const [headding, setHeadding] = useState(window.innerWidth);

    const setWidth = () => {
        return setHeadding(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", setWidth);
        return () => {
            window.removeEventListener("resize", setWidth); // Clean up the event listener on component unmount.
        };
    }, [headding]);

    return (
        <div className='useeffect'>
            <div>
                <h2>Window size showing using React useEffect</h2>
                <h3>{headding}</h3>
            </div>
        </div>
    );
}

export default Effeect;
