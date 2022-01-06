import React from "react";


const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '2px solid black', height:'70vh', width:'70%', margin:'auto'}}>
            {props.children}
        </div>
    )
}

export default Scroll