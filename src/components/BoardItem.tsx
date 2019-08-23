import * as React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
    BOARD_DATA_REMOVE,
    BOARD_DATA_VIEW,
    BOARD_DATA_SELECT,
    BOARD_DATA_CLEAR
} from '../reducers/Board';

interface IProps{
    row: any
}

export const BoardItem = ({
                              row,
                          }: IProps) => {

    const { selectedBoard, boards } = useSelector((state: any) => state.Board);
    const dispatch = useDispatch();

    const onBoardRemove = (e) => {
        dispatch({
            type: BOARD_DATA_REMOVE,
            boardNumber: e
        })
    };

    const onBoardDataView = (e) => {
        dispatch({
            type: BOARD_DATA_VIEW,
            boardNumber: e
        })
    };

    const onBoardDataSelect = (e) => {
        dispatch({
            type: BOARD_DATA_SELECT,
            boardNumber: e,
        })
    };

    const onBoardDataClear = (e) => {
        dispatch({
            type: BOARD_DATA_CLEAR,
            boardNumber: e,
        })
    };

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
                    checked={ row.checked }
                    // checked={
                    //     selectedBoard.boardNumber === row.boardNumber
                    //         ? selectedBoard.checked
                    //         : ''
                    // }
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
