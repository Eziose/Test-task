import React from 'react';
import  './Button.css';

const button = (props) => {
    let arrow = <i className="fa fa-arrow-right IconRight"/>;
    if (!props.arrow) {
        arrow = ''
    }
    return <button className="Button"
                   style={{float: props.pos, color: props.color}}
                   onClick={props.clicked}
                   disabled={props.disabled}
    >{props.children}
        {arrow}
    </button>
};

export default button;