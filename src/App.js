import React, {Component} from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

    state = {
        modalIsOpen: null,
        modalIsInitiated: null,
        showBlock: false
    }

    showModal = () => {
        this.setState({modalIsOpen: true})
    }

    closeModal = () => {
        this.setState({modalIsOpen: false})
    }

    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>
                <button className="Button" onClick={() => this.setState(prevState =>({showBlock: !prevState.showBlock}))}>Toggle</button>
                <br/>
                {/*The mount on enter and unmount on exit are properties that make the object take off from the DOM*/}
                <Transition
                    in={this.state.showBlock}
                    timeout={1000}
                    mountOnEnter={}
                    unmountOnExit={}>
                    {state => (
                        <div style={{
                            backgroundColor: "red",
                            width: 100,
                            height: 100,
                            margin: "auto",
                            transition: 'opacity 1s ease-out',
                            opacity: state === 'exiting' ? 0 : 1
                        }}/>
                    )}
                </Transition>
                {/*instead of passing the state in the component we now pass it in the in prop which is the one that know whether the component is entering or exiting*/}
                <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
                {/*This solution is not complete at all because the null happens before the closed gets executed (it is rendered before)*/}
                {this.state.modalIsOpen? <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>: null}
                {this.state.modalIsOpen?<Backdrop show={this.state.modalIsOpen}/>: null}
                <button className="Button" onClick={this.showModal}>Open Modal</button>
                <h3>Animating Lists</h3>
                <List/>
            </div>
        );
    }
}

export default App;
