import * as React from 'react';

interface IProps {
    onBoardDataSave(e: any): void
    Board: any
}

export class BoardForm extends React.Component<IProps> {
    state = {
        boardTitle: '',
        boardWriter: ''
    };
    initialSelectedBoard = {
        boardNumber: '',
        boardTitle: '',
        boardWriter: '',
        boardMakeDate: '',
    };

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if(this.props.Board.selectedBoard !== prevProps.Board.selectedBoard){
            this.setState(this.props.Board.selectedBoard)
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSave = (e) => {
        e.preventDefault();
        this.props.onBoardDataSave(this.state);
        this.setState(this.initialSelectedBoard);
    };

    render(){
        return(
            <>
                <form onSubmit={ (e) => this.handleSave(e) }>
                    <input type="text" value={ this.state.boardTitle } name="boardTitle"  onChange={ this.handleChange } placeholder="title" />
                    <input type="text" value={ this.state.boardWriter} name="boardWriter"  onChange={ this.handleChange } placeholder="name" />
                    <button onClick={ this.handleSave }>Save</button>
                </form>
            </>
        )
    }
};
