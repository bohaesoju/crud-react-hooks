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

export const BoardItem = ({
                              onBoardRemove,
                              row,
                              selectedBoard,
                              onBoardDataSelect,
                              onBoardDataClear,
                              onBoardDataView
                          }: IProps) => {
    const handleCheckbox= (e, i) => {
        if(e.target.checked === true){
            onBoardDataSelect(i);
        } else {
            onBoardDataClear(i);
        }
    };
    return(
        <tr>
            <td>{ row.boardNumber }</td>
            <td>
                <input
                    onChange={ (e) => handleCheckbox(e, row.boardNumber) }
                    checked={
                        selectedBoard.boardNumber === row.boardNumber
                            ? selectedBoard.checked
                            : ''
                    }
                    type="checkbox"
                />
            </td>
            <td><Link to="boardview" onClick={ () => onBoardDataView(row.boardNumber) }>{ row.boardTitle }</Link></td>
            <td>{ row.boardWriter }</td>
            <td>{ row.boardMakeDate.toLocaleDateString('ko-KR') }</td>
            <td><a onClick={ () => onBoardRemove(row.boardNumber) }>삭제</a></td>
        </tr>
    )
};
