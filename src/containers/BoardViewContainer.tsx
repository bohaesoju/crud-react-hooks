import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import '../style/style.scss';
import { rootState } from '../reducers/';

interface IProps{
    Board: any
}

class BoardViewContainer extends React.Component<IProps>{
    render(){
        const { Board } = this.props;
        return(
            <div>
                { Board.boards[0].boardTitle}
            </div>
        )
    }
}

const mapStateToProps = (rootState: rootState) => {
    return {
        Board: rootState.Board
    }
};

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//
//     }
// };

export default connect(
    mapStateToProps,
    null
)(BoardViewContainer);
