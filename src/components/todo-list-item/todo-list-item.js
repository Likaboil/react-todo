import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  OnLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      };
    });
  };

  OnMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      };
    });
  }

  render() {
    const {label} = this.props;
    const {done, important} = this.state;

    let classNames = "todo-list-item";

    if(done) {
      classNames += ' done';
    }

    if(important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label"
              onClick={this.OnLabelClick}>
          {label}
        </span>
        <button className="btn btn-outline-danger btn-sm float-right"
                type="button"
                onClick={this.props.OnDeleted}>
          <i className="fa fa-trash" />
        </button>
        <button className="btn btn-outline-success btn-sm float-right"
                type="button"
                onClick={this.OnMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}
