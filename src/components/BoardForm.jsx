import * as React from 'react';
import { connect } from 'react-redux';
import { board_data_save } from '../reducers/Board';

// interface IBoardForm {
//     onSaveData(e: any): void
//     selectedBoard: any
// }

class BoardForm extends React.Component {
    state = {};
    initialSelectedBoard = {
        boardNumber: '',
        boardTitle: '',
        boardWriter: '',
        boardMakeDate: '',
    };

    // componentDidUpdate(prevProps: Readonly<IBoardForm>, prevState: Readonly<{}>, snapshot?: any): void {
    //     if(prevProps.selectedBoard.boardTitle !== this.state.boardTitle){
    //         this.setState({
    //             boardTitle: prevProps.selectedBoard.boardTitle,
    //             boardWriter: prevProps.selectedBoard.boardWriter
    //         })
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({
            boardTitle: '',
            boardWriter: ''
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSave = () => {
        this.props.dispatch(board_data_save(this.state));
        this.setState(this.initialSelectedBoard);
    };

    handleSelectRow = (row) => {
        this.setState(row)
    };

    UNSAFE_componentWillReceiveProps(nextProps, nextContext){
        console.log(nextProps);
        this.setState(nextProps.Board.selectedBoard)
    }

    render(){
        return(
            <>
            {/*<form onSubmit={ this.handleSubmit }>*/}
                <input type="text" value={ this.state.boardTitle } name="boardTitle"  onChange={ this.handleChange } placeholder="title" />
                <input type="text" value={ this.state.boardWriter} name="boardWriter"  onChange={ this.handleChange } placeholder="name" />
                <button onClick={ this.handleSave }>Save</button>
            {/*</form>*/}
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        Board: state.Board
    }
};

export default connect(mapStateToProps)(BoardForm);
