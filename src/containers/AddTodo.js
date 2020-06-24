import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = "";
                }}
            >
                <div className="form-row">
                    <div className="col-sm-3">
                        <input
                            ref={(node) => (input = node)}
                            className="form-control"
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            type="submit"
                            className="btn btn-outline-secondary"
                        >
                            Add Todo
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
