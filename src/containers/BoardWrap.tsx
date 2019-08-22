import * as React from 'react';
import { useSelector } from 'react-redux';
import { BoardItem, BoardForm } from "../components/";
import '../style/style.scss';

export const BoardWrap = () => {
    const { Board } = useSelector((state: any) => state);
    return(
        <div>
            <BoardForm />
            <table className="table">
                <tbody>
                <tr>
                    <td>No.</td>
                    <td>수정</td>
                    <td>Title</td>
                    <td>Name</td>
                    <td>Date</td>
                    <td></td>
                </tr>
                {
                    Board.boards.map(row =>
                        (<BoardItem
                            key={ row.boardNumber }
                            row={ row }
                        />)
                    )
                }
                </tbody>
            </table>
        </div>
    );
};
