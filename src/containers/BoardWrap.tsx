import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { BoardItem, BoardForm } from "../components/";
import '../style/style.scss';
import { rootState } from '../reducers/';
import {board_data_remove, board_data_save, board_data_select} from "../reducers/Board";

interface IProps{
    selectedBoard: any
    Board: any
    onBoardRemove(i: number): void
    onBoardDataSelect(i: number): void
    onBoardDataSave(e: any): void
}

class BoardWrap extends React.Component<IProps> {

    render(){
        const { Board } = this.props;
        const { onBoardRemove, onBoardDataSelect, onBoardDataSave } = this.props;

        return(
            <div>
                <BoardForm Board={ Board } onBoardDataSave={ onBoardDataSave } />
                <table className="table">
                    <tbody>
                        <tr>
                            <td>No.</td>
                            <td>Title</td>
                            <td>Name</td>
                            <td>Date</td>
                            <td></td>
                        </tr>
                        {
                            Board.boards.map(row =>
                                (<BoardItem onBoardRemove={ onBoardRemove } onBoardDataSelect={ onBoardDataSelect } key={ row.boardNumber } row={ row } />)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (rootState: rootState) => {
    return {
        Board: rootState.Board
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onBoardDataSelect: (i) => dispatch(board_data_select(i)),
        onBoardRemove: (i) => dispatch(board_data_remove(i)),
        onBoardDataSave: (e) => dispatch(board_data_save(e))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardWrap);