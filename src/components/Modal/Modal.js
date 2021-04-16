import React from 'react';
//THIS IS THE PACKAGE TO CREATE FANCY ANIMATIONS IN CSS AND REACT
import Transition from 'react-transition-group/Transition';

import './Modal.css';

//we can create JS objects to add to the animation timing either to enter or to exit
const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = (props) => {
    return (<Transition
        in={props.show}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit>
        {state => {
            const cssClasses = ['Modal', state === 'entering' ? 'ModalOpen' : (state === 'exiting' ? 'ModalClosed' : null)];
            return (
                <div className={cssClasses.join(' ')}>
                    <h1>A Modal</h1>
                    <button className="Button" onClick={props.closed}>Dismiss</button>
                </div>
            );
        }}
    </Transition>)
};

export default modal;