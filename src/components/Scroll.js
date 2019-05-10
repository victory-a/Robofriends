import React from 'react';

const Scroll = (props) => {
    const style = {
        overflowY: 'scroll',
        border: '1.5px solid black',
        height: '800px'
    }
    return (
        <div style = {style}>
            {props.children};
        </div> 
    )

};

export default Scroll;
