import * as React from 'react';
import { connect } from 'react-redux';
import BoardForm from "../components/BoardForm";
import BoardItem from "../components/BoardItem";
import '../style/style.scss';
import rootReducer from '../reducers/index.js';

interface IProps{
    boards: any
    selectedBoard: any
    Board: any
}

class BoardWrap extends React.Component<IProps> {

    render(){
        const { boards } = this.props.Board;

        return(
            <div>
                <BoardForm />
                <table className="table">
                    <tbody>
                        <tr>
                            <td>No.</td>
                            <td>Title</td>
                            <td>Name</td>
                            <td>Date</td>
                            <td></td>
                        </tr>
                        {
                            boards.map(row =>
                                (<BoardItem key={ row.boardNumber } row={ row } />)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (rootReducer: any) => {
    return {
        Board: rootReducer.Board
    }
};

export default connect(
    mapStateToProps
)(BoardWrap);
