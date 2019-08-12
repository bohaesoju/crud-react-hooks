import * as React from 'react';

interface IBoardForm {
    onSaveData(e: any): void
}

export class BoardForm extends React.Component<IBoardForm> {
    state = {};

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({});
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <input type="text" onChange={ this.handleChange } placeholder="title" name="boardTitle" />
                <input type="text" onChange={ this.handleChange } placeholder="name" name="boardWriter" />
                <button type="submit">Save</button>
            </form>
        )
    }
};
