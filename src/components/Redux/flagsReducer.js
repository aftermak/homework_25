const initialState = {
    create: false,
    update: false,
    btnCreate: false,
    btnLogin: true,
    token: localStorage.getItem('token'),
    page: 1,
    totalPages: null
}
export const flagsReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE":
            return {...state, create: action.payload}
        case "UPDATE":
            return {...state, update: action.payload}
        case "BTN_CREATE":
            return {...state, btnCreate: action.payload}
        case "BTN_LOGIN":
            return {...state, btnLogin: action.payload}
        case "TOKEN":
            return {...state, token: action.payload}
        case "PAGE_INCREMENT":
            return {...state, page: state.page + 1 }
        case "PAGE_DECREMENT":
            return {...state, page: state.page - 1}
        case "PAGE_DEFAULT":
            return {...state, page: action.payload}
        case "TOTAL_PAGES":
            return {...state, totalPages: action.payload}
        default: return state
    }
}