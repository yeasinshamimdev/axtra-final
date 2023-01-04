import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
 
const Counter = ({start, end, k, t1, t2, title}) => {
    const [countOn, setCountOn] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
            <h2 className="counter__number">
                {countOn && <CountUp start={start} end={end} duration={3} delay={0} />}{k && "k"}
            </h2>
         { title ?  <p>{title}</p>  : <p>{t1} <br />{t2}</p>}
        </ScrollTrigger>
    );
};

export default Counter;