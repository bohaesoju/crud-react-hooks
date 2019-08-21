import * as React from 'react';
import { Router, Route, Link } from 'react-router-dom';

interface IProps{
    row: any
    selectedBoard: any
    onBoardDataSelect(e: number): void
    onBoardRemove(e: number): void
    onBoardDataClear(i: number): void
    onBoardDataView(i: number): void
}

export class BoardItem extends React.Component<IProps> {

    handleBoardDataRemove = (i) => {
        this.props.onBoardRemove(i)
    };

    handleCheckbox = (e, i) => {
        if(e.target.checked === true){
            this.props.onBoardDataSelect(i);
        } else {
            this.props.onBoardDataClear(i)
        }
    };

    handleViewDetail =(i) => {
        this.props.onBoardDataView(i);
        console.log('detail : ', i)
    };

    render(){
        const { row, selectedBoard } = this.props;
        return(
            <tr>
                <td>{ row.boardNumber }</td>
                <td>
                    <input
                        onChange={ (e) => this.handleCheckbox(e, row.boardNumber) }
                        checked={
                                selectedBoard.boardNumber === row.boardNumber
                                ? selectedBoard.checked
                                : ''
                            }
                        type="checkbox"
                    />
                </td>
                <td><Link to="boardview" onClick={ () => this.handleViewDetail(row.boardNumber) }>{ row.boardTitle }</Link></td>
                <td>{ row.boardWriter }</td>
                <td>{ row.boardMakeDate.toLocaleDateString('ko-KR') }</td>
                <td><a onClick={ () => this.handleBoardDataRemove(row.boardNumber) }>삭제</a></td>
            </tr>
        )
    }
};
