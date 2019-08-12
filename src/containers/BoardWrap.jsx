import * as React from 'react';
import { BoardForm } from "../components";
import BoardItem from "../components/BoardItem";

class BoardWrap extends React.Component {
    state = {
        maxNumber: 3,
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

    handleSaveData = (data) => {
        this.setState({
            boards: this.state.boards.concat({
                boardNumber: this.state.maxNumber++,
                boardMakeDate: new Date(),
                ...data
            })
        })
    };

    handleRemoveData = (boardNumber) => {
        this.setState({
            boards: this.state.boards.filter(row => row.boardNumber !== boardNumber)
        })
    };

    render(){
        const { boards } = this.state;

        return(
            <div>
                <BoardForm onSaveData={ this.handleSaveData } />
                <table border="1">
                    <tbody>
                    <tr align="center">
                            <td width="50">No.</td>
                            <td width="300">Title</td>
                            <td width="100">Name</td>
                            <td width="100">Date</td>
                        </tr>
                        <BoardItem row = { boards } onRemoveData = { this.handleRemoveData } />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BoardWrap;
