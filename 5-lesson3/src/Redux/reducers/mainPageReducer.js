

const initialState = {
    title: "old title"
}


export default function mainPageReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return{...state,title: "new title"}
        case types.WITH_PARAMS:
            return {...state, title: action.payload}
        default: return state
    }



    return state
}