import React, {Component} from 'react';
//With this component we can animate groups of objects like lists and things like those
import TransitionGroup from 'react-transition-group/TransitionGroup'
//transition group must be encapsulated ina component of a same type as the css transition
import CSSTransition from 'react-transition-group/CSSTransition';

import './List.css';

class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render() {
        const listItems = this.state.items.map((item, index) => (
            <CSSTransition key={index}
                           classNames="fade"
                           timeout={300}>
                <li className="ListItem"
                    onClick={() => this.removeItemHandler(index)}>{item}>
                </li>
            </CSSTransition>
        ));

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                {/*The transition group component has by default a div as a component, we can specify the one we want by passing it as prop*/}
                <TransitionGroup component="ul" className="List">
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;