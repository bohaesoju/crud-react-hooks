import * as React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export const BoardViewContainer = () => {
    const { Board } = useSelector((state: any) => state);
    return(
        <>
            <div>
                제목 : { Board.viewDetail[0].boardTitle}
            </div>
            <div>
                글쓴이 : { Board.viewDetail[0].boardWriter}
            </div>
            <div>
                작성일 : { Board.viewDetail[0].boardMakeDate.toLocaleDateString('ko-KR')}
            </div>
            <Link to="/">뒤로가기</Link>
        </>
    )
};
