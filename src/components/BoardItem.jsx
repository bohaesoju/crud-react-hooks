import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { board_data_select, board_data_remove } from '../reducers/Board';

// interface IProps{
//     row: any
//     onRemoveData(e: number): void
//     onSelectRow(e: any): void
//     onBoardRead(e: any): void
//     onBoardRemove(e: number): void
// }

class BoardItem extends React.Component {
    // handleRemove = () => {
    //     const{ row, onRemoveData} = this.props;
    //     onRemoveData( row.boardNumber )
    // };

    handleRemoveData = (i) => {
        const{ onBoardRemove } = this.props;
        onBoardRemove(i)
    };

    handleUpdateForm = (boardNumber) => {
        this.props.dispatch(board_data_select(boardNumber))
    };

    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    };

    render(){
        const { row } = this.props;
        return(
            <tr>
                <td>{ row.boardNumber }</td>
                <td><a onClick={ () => this.handleUpdateForm(row.boardNumber) }>{ row.boardTitle }</a></td>
                <td>{ row.boardWriter }</td>
                <td>{ row.boardMakeDate.toLocaleDateString('ko-KR') }</td>
                <td><button onClick={ () => this.props.dispatch(board_data_remove(row.boardNumber)) }>삭제</button></td>
            </tr>
        )
    }
};

// const mapDispatchToProps = (dispatch) => ({
//     onBoardRead: (i) => dispatch(board_read(i)),
//     onBoardRemove: (i) => dispatch(board_remove(i))
// });

export default connect()(BoardItem);
