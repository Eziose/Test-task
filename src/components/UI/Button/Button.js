import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <button className={classes.Button}
            onClick={props.clicked}
            disabled={props.disabled}
    >Next
    <i className="fa fa-arrow-right"/>
    </button>
);

export default button;