import { ADD, MINUS, MULTI, SQRT } from '../types';

const initialState = {
    result: 0,
};

export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, result: action.payload };
        case MINUS:
            return { ...state, result: action.payload };
        case MULTI:
            return { ...state, result: action.payload };
        case SQRT:
            return { ...state, result: action.payload };
        default:
            return state;
    }
};

// export default calculatorReducer;
