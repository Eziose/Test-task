import React from 'react';
import './Layout.css';

const layout = (props) => {
    return <div className="Layout">
        <div className="header">
            <p className="titleOfHeader">{props.title}</p>
            <div className="outerStep">
                <div style={{width: props.steps}} className="innerStep"></div>

            </div>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
};

export default layout;