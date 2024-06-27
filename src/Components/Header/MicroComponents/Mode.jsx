import React from 'react';

function Mode(props) {

    return (
        <div
            onClick={()=>{
                props.setMode(!props.mode)
            }}
            style={{
                width: '60px',
                height: '30px',
                backgroundColor: 'lightgray',
                borderRadius: '50px',
                padding: '2px'
            }}>
            <div style={{
                backgroundColor: '#000',
                width: '26px',
                height: '26px',
                borderRadius: '20px',
                transition: '.5s',
                transform: (props.mode ? 'translate(0px)' : 'translate(30px)')
            }}></div>
        </div>
    );
}

export default Mode;