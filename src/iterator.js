'use strict';

import React from 'react';

const list = [
  { name: "Bread", completed: true  },
  { name: "Tomatos", completed: false  },
  { name: "Salads", completed: false  },
  { name: "Pasta", completed: true  }
]

export default class Iterator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      list: list
    }
    console.log(this.state);
  }

  render(){
    // The JSX template to iterate
    const listItems = this.state.list.map((e,i) => {
      return <div className="form-check" key={i}>
              <label className="form-check-label">
                <input type="checkbox"
                  className="form-check-input"
                  checked={e.completed}
                  onChange={ (e) => this.select(e) } />
                <span>{e.name}</span>
              </label>
            </div>
    });

    return (
      <section>
        <hr />
        <h4>Shop list</h4>
        <div>{listItems}</div>
      </section>
    )
  }
}
