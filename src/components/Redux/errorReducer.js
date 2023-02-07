const initialState = {
    error: ''
}
export const errorReducer = (state=initialState, action) => {
    switch (action.type) {
        case "ERROR":
            return {...state, error: action.payload}
        default: return state
    }
}