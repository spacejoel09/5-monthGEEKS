import "react-redux"

const PLUS = 'PLUS';
const MINUS = 'MINUS';
const PLUS_TEN = 'PLUS_TEN';
const MINUS_TEN = 'MINUS_TEN';
const RESET = 'RESET';

export const plus = () => ({ type: PLUS });
export const minus = () => ({ type: MINUS });
export const plusTen = () => ({ type: PLUS_TEN });
export const minusTen = () => ({ type: MINUS_TEN });
export const reset = () => ({ type: RESET });


const initialState = {
    title: "counter",
    value: 0
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PLUS:
            return { ...state, value: state.value + 1 };
        case MINUS:
            return { ...state, value:Math.max(0, state.value - 1 )};
        case PLUS_TEN:
            return { ...state, value: state.value + 10 };
        case MINUS_TEN:
            return { ...state, value:Math.max(0,state.value - 10 )};
        case RESET:
            return { ...state, value: 0 };
        default:
            return state;
    }
};
