import React, { useEffect, useRef, useState } from 'react';
import css from './About.module.css'

function About() {
    let [test, setTest] = useState(true)
    let [count, setCount] = useState(0)
    let [modal, setModal] = useState(false)

   

    // useEffect(() => {
    //     setTest(!test)
    //     console.log(test);
    // }, [modal])

    let inp = useRef()
    return (
        <>
            <h1>Hooklar</h1>

            <div className={css.block}>
                <h2>{count}</h2>
                <div className={css.btns}>
                    <button onClick={() => setCount(--count)}>-</button>
                    <button onClick={() => setCount(++count)}>+</button>
                    <button onClick={() => setModal(true)}>Modal</button>
                </div>
            </div>

            <div className={modal ? css.modalActive : css.modal}>
                <h4>adasdasdasdas</h4>
                <input ref={inp} type="text" />
                <button onClick={() => {
                    console.log(inp.current.value);
                    inp.current.value = ""
                }}>Matnni saqlash</button>
                <hr />
                <button onClick={() => setModal(false)}>Close</button>
            </div>
        </>
    );
}

export default About;