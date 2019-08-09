import * as React from 'react';

class Board extends React.Component {
    state = {
        boards: [
            {
                boardNumber: 1,
                boardWriter: 'Lee SunSin',
                boardTitle: 'If you intend to live then you die',
                boardMakeDate: new Date()
            },
            {
                boardNumber: 2,
                boardWriter: 'So SiNo',
                boardTitle: 'Founder for two countries',
                boardMakeDate: new Date()
            }
        ]
    };

    render(){
        const { boards } = this.state;
        const list = boards.map((row) => {
            return row.boardNumber + row.boardWriter
        });

        return(
            <div>
                {list}
            </div>
        )
    }
}

export default Board;
