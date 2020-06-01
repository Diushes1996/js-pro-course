import React from 'react';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { name: 'Купить молоко', done: false, active: true },
                { name: 'Купить хлеб', done: true, active: true },
                { name: 'Купить масло', done: false, active: false }
            ]
        }
    }

    handleDone = (event) => {
       this.setState((list) => )
       //console.log(event.target.value);
    }

    render() {
        let listItems = this.state.list.map((element, i) => {
            return (
               <li key={i}>
                   <div>
                       <input type="checkbox" onChange={this.handleDone}></input>
                       {element.name}
                   </div>
               </li>
            );
        });
        return <ul>{listItems}</ul>
    };
};