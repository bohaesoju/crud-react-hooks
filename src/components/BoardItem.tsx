import * as React from 'react';

interface IProps{
    row: any
    selectedBoard: any
    onBoardDataSelect(e: number): void
    onBoardRemove(e: number): void
    onBoardDataClear(i: number): void
}

export class BoardItem extends React.Component<IProps> {

    handleUpdateForm = (i) => {
        this.props.onBoardDataSelect(i);
    };

    handleBoardDataRemove = (i) => {
        this.props.onBoardRemove(i)
    };

    handleCheckbox = (e, i) => {
        // console.log(e.target.checked);
        if(e.target.checked === true){
            this.props.onBoardDataSelect(i);
        } else {
            this.props.onBoardDataClear(i)
        }
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
                <td><a onClick={ () => this.handleUpdateForm(row.boardNumber) }>{ row.boardTitle }</a></td>
                <td>{ row.boardWriter }</td>
                <td>{ row.boardMakeDate.toLocaleDateString('ko-KR') }</td>
                <td><a onClick={ () => this.handleBoardDataRemove(row.boardNumber) }>삭제</a></td>
            </tr>
        )
    }
};
