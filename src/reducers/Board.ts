import { IBoard } from './Models';

const BOARD_DATA_SAVE = 'BOARD_DATA_SAVE';
const BOARD_DATA_REMOVE = 'BOARD_DATA_REMOVE';
const BOARD_DATA_SELECT = 'BOARD_DATA_SELECT';
const BOARD_DATA_CLEAR = 'BOARD_DATA_CLEAR';

export const board_data_save = (data) => {
    return {
        type: BOARD_DATA_SAVE,
        data
    }
};

export const board_data_remove = (boardNumber) => {
    return{
        type: BOARD_DATA_REMOVE,
        boardNumber
    }
};

export const board_data_select = (boardNumber) => {
    return{
        type: BOARD_DATA_SELECT,
        boardNumber
    }
};

export const board_data_clear = (boardNumber) => {
    return{
        type: BOARD_DATA_CLEAR,
        boardNumber
    }
};

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
    selectedBoard: {}
};

const board = (state = initialState, action: any): IBoard => {
    let boards = state.boards;
    switch(action.type){
        case BOARD_DATA_SAVE:
            // if(!data.boardNumber){
                return{
                    maxNumber: state.maxNumber + 1,
                    boards: boards.concat({
                        ...action.data,
                        boardNumber: state.maxNumber,
                        boardMakeDate: new Date(),
                        checked: false
                    }),
                    selectedBoard: {}
                };
                // return {
                //     ...state,
                //     boards: boards.map(row => action.data.boardNumber === row.boardNumber
                //         ? {
                //             ...action.data,
                //             checked: false
                //         }
                //         : console.log(row)
                //         // : row
                //     ),
                //     selectedBoard: {}
                // };
            // }
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
                        // ? console.log(boards[row.boardNumber - 1])
                        ? boards[row.boardNumber - 1].checked = true
                        // ? !(boards[row.boardNumber].checked)
                        : console.log('select');
                    // boards[action.boardNumber - 1], action.boardNumber
                    return row;
                }),
                // boards: state.boards.map((v) => {
                //     console.log(boards[action.boardNumber - 1], action.boardNumber);
                //     return v;
                // }),
                selectedBoard: boards.find(row => row.boardNumber === action.boardNumber)
            };
        case BOARD_DATA_CLEAR:
            return{
                ...state,
                boards: state.boards.map((row) => {
                    boards[row.boardNumber - 1].checked = false;
                    // row.boardNumber === action.boardNumber
                    //     ? boards[row.boardNumber - 1].checked = false
                    //     : console.log('clear');
                    return row;
                }),
                selectedBoard: {
                    boardTitle: '',
                    boardWriter: '',
                    boardNumber: action.boardNumber,
                    checked: false
                }
            };
        default:
            return Object.assign({}, state);
    }
};

export default board;
