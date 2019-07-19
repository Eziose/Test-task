import React from 'react';
import './Input.css';

const input = (props) => {
    const inputClasses = ['Input'];
    let label = <label>{props.label}</label>;
    if (props.err) {
        inputClasses.push('invalid')
        label = <label style={{color: 'salmon'}}>Check your {props.label}</label>
    }
    return (<div>
            <div className="form-group">
                {label}
                <input className={inputClasses.join(' ')} {...props.elementConfig}
                       value={props.value} onChange={props.changed}/>
            </div>
        </div>
    )
};

export default input;