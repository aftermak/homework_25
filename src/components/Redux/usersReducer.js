const initialState = {
    totalPages: [],
    userList: [],
    response:''
}
export const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {...state, totalPages: action.payload.total_pages, userList: action.payload.data}

        case "USER_DELETE":
            return {...state, userList: state.userList.filter(user => user.id !== action.payload)}

        case "ADD_USER":
            return {...state, userList:[...state.userList, action.payload]}

        default: return state
    }
}