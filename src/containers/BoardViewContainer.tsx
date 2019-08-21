import * as React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../style/style.scss';
import { rootState } from '../reducers/';

interface IProps{
    Board: any
}

class BoardViewContainer extends React.Component<IProps>{
    render(){
        const { Board } = this.props;
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
