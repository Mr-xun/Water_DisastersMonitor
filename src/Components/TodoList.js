import React, { PureComponent as Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";

class TodoUI extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="ipt" />
                <Button
                    type="primary"
                    size="small"
                    onClick={() => this.props.addTodo(this.refs.ipt.value)}
                >
                    增加todo
                </Button>
                <ul>
                    {this.props.todos.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => {
    return {
        todos: state.todo_list || []
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        addTodo: value => {
            dispatch({
                type: "ADD_TODO",
                payload: value
            });
        }
    };
};
const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoUI);
export default TodoList;
