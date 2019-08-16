import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { board_data_save } from '../reducers/Board';
import { rootState } from '../reducers';

interface IProps {
    onBoardDataSave(e: any): void
    // selectedBoard: any
    // boardTitle: any
}

class BoardForm extends React.Component<IProps> {
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

    // componentDidUpdate(prevProps: Readonly<IBoardForm>, prevState: Readonly<{}>, snapshot?: any): void {
    //     if(prevProps.selectedBoard.boardTitle !== this.state.boardTitle){
    //         this.setState({
    //             boardTitle: prevProps.selectedBoard.boardTitle,
    //             boardWriter: prevProps.selectedBoard.boardWriter
    //         })
    //     }
    // }

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

    UNSAFE_componentWillReceiveProps(nextProps, nextContext){
        this.setState(nextProps.Board.selectedBoard)
    }

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

const mapStateToProps = (rootState: rootState) => {
    return {
        Board: rootState.Board
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onBoardDataSave: (e) => dispatch(board_data_save(e))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardForm);
