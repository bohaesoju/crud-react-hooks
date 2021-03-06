import { IBoard } from './Models';

export const BOARD_DATA_SAVE = 'BOARD_DATA_SAVE';
export const BOARD_DATA_REMOVE = 'BOARD_DATA_REMOVE';
export const BOARD_DATA_SELECT = 'BOARD_DATA_SELECT';
export const BOARD_DATA_CLEAR = 'BOARD_DATA_CLEAR';
export const BOARD_DATA_VIEW = 'BOARD_DATA_VIEW';

const initialState: IBoard = {
    maxNumber: 3,
    boards: [
        {
            boardNumber: 1,
            boardWriter: 'Lee SunSin',
            boardTitle: 'If you intend to live then you die',
            boardMakeDate: new Date(),
            checked: false
        },
        {
            boardNumber: 2,
            boardWriter: 'So SiNo',
            boardTitle: 'Founder for two countries',
            boardMakeDate: new Date(),
            checked: false
        }
    ],
    selectedBoard: {},
    viewDetail: []
};

const board = (state = initialState, action: any): IBoard => {
    let boards = state.boards;
    switch(action.type){
        case BOARD_DATA_SAVE:
            return{
                ...state,
                maxNumber: state.maxNumber + 1,
                boards: boards.concat({
                    ...action.data,
                    boardNumber: state.maxNumber,
                    boardMakeDate: new Date(),
                    checked: false
                }),
                selectedBoard: {},
                viewDetail: []
            };
        case BOARD_DATA_REMOVE:
            return {
                ...state,
                boards: boards.filter(row => row.boardNumber !== action.boardNumber),
                selectedBoard: {}
            };
        case BOARD_DATA_SELECT:
            return{
                ...state,
                boards: state.boards.map((row) => {
                    row.boardNumber === action.boardNumber
                        ? boards[row.boardNumber - 1].checked = true
                        : boards[row.boardNumber - 1].checked = false
                    return row;
                }),
                selectedBoard: boards.find(row => row.boardNumber === action.boardNumber)
            };
        case BOARD_DATA_CLEAR:
            return{
                ...state,
                boards: state.boards.map((row) => {
                    boards[row.boardNumber - 1].checked = false;
                    return row;
                }),
                selectedBoard: {
                    boardTitle: '',
                    boardWriter: '',
                    boardNumber: action.boardNumber,
                    checked: false
                }
            };
        case BOARD_DATA_VIEW:
            return{
                ...state,
                viewDetail: state.boards.filter(row => row.boardNumber === action.boardNumber)
            };
        default:
            return Object.assign({}, state);
    }
};

export default board;
