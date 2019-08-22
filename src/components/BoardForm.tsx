import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BOARD_DATA_SAVE } from '../reducers/Board';
import { useEffect, useState } from "react";


export const BoardForm = () => {
    const [boardTitle, setBoardTitle] = useState('');
    const [boardWriter, setBoardWriter] = useState('');
    const { selectedBoard } = useSelector((state: any) => state.Board);
    const dispatch = useDispatch();

    useEffect(() => {
        setBoardTitle(selectedBoard.boardTitle),
        setBoardWriter(selectedBoard.boardWriter)
    }, [selectedBoard]);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch({
            type: BOARD_DATA_SAVE,
            data: {
                boardTitle: boardTitle,
                boardWriter: boardWriter
            },
        });
        setBoardTitle('');
        setBoardWriter('');
    };

    return(
        <form onSubmit={ (e) => handleSubmitForm(e) }>
            <input type="text" value={ boardTitle } name="boardTitle"  onChange={ e => setBoardTitle(e.target.value) } placeholder="title" />
            <input type="text" value={ boardWriter} name="boardWriter"  onChange={ e => setBoardWriter(e.target.value) } placeholder="name" />
            <button onClick={ handleSubmitForm }>Save</button>
        </form>
    )
};
