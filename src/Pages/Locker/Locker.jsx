import React, { useState } from 'react';
import css from './Locker.module.css'

function Locker() {

    let [pass, setPass] = useState('_')
    let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const writer = (key)=>{
        setPass(pass + key)
    }

    return (
        <>

            <div className={css.block}>
                <h2>{pass}</h2>
                <div className={css.btns}>
                    {keys.map(key=><button onClick={()=>writer(key)} key={key}>{key}</button>)}
                    <button onClick={()=>setPass('_')}>CLEAR</button>
                </div>
            </div>
        </>
    );
}

export default Locker;