import * as React from 'react';

interface IProps{
    row: any
    onRemoveData(e: number): void
}

class BoardItem extends React.Component<IProps> {
    handleRemove = () => {
        const{ row, onRemoveData} = this.props;
        onRemoveData( row.boardNumber )
    };

    render(){
        console.log(this.props.row.boardNumber);
        return(
            <>
                { this.props.row.map(e => (
                    <tr key={ e.boardNumber }>
                        <td>{ e.boardNumber }</td>
                        <td>{ e.boardWriter }</td>
                        <td>{ e.boardTitle }</td>
                        <td>{ e.boardMakeDate.toLocaleDateString('ko-KR') }</td>
                        <td onClick={ this.handleRemove }>삭제</td>
                    </tr>

                )) }
            </>
        )
    }
};

export default BoardItem;
