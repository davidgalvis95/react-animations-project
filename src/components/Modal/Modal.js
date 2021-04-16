import React from 'react';
//THIS IS THE PACKAGE TO CREATE FANCY ANIMATIONS IN CSS AND REACT
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

//we can create JS objects to add to the animation timing either to enter or to exit
const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = (props) => {
    //this new CSSTransition avoid us to manually add the classes when an animation has to happen
    //instead it does respect the original class name, but adds the new ones based on the entering-active or exiting-active words
    return (<CSSTransition
        in={props.show}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        classNames="fade-slide">
                <div className="Modal">
                    <h1>A Modal</h1>
                    <button className="Button" onClick={props.closed}>Dismiss</button>
                </div>
    </CSSTransition>)
};

export default modal;