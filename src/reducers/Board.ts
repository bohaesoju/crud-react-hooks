const BOARD_DATA_SAVE = 'BOARD_DATA_SAVE';
const BOARD_DATA_REMOVE = 'BOARD_DATA_REMOVE';
const BOARD_DATA_SELECT = 'BOARD_DATA_SELECT';

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

const initialState = {
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
    ],
    selectedBoard: {}
};

const board = (state = initialState, action: any) => {
    let boards = state.boards;
    switch(action.type){
        case BOARD_DATA_SAVE:
            let data = action.data;
            let maxNumber = state.maxNumber;
            // if(!data.boardNumber){
                return{
                    maxNumber: maxNumber + 1,
                    boards: boards.concat({
                        ...data,
                        boardNumber: maxNumber,
                        boardMakeDate: new Date()
                    }),
                    selectedBoard: {}
                };
                return {
                    ...state,
                    boards: boards.map(row => data.boardNumber === row.boardNumber
                        ? {...data}
                        : row),
                    selectedBoard: {}
                }
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
                selectedBoard: boards.find(row => row.boardNumber === action.boardNumber)
            };
        default:
            return Object.assign({}, state);
    }
};

export default board;
