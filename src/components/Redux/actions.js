export const btnCreate = (flag) => {
    return {
        type: "BTN_CREATE",
        payload: flag
    }
}

export const btnLogin = (flag) => {
    return {
        type: "BTN_LOGIN",
        payload: flag
    }
}
export const createModal = (flag) => {
    return {
        type: "CREATE",
        payload: flag
    }
}
export const updateModal = (flag) => {
    return {
        type: "UPDATE",
        payload: flag
    }
}

export const getToken = (token) => {
    return {
        type: "TOKEN",
        payload: token
    }
}

export const errorLogin = (error) => {
    return {
        type: "ERROR",
        payload: error
    }
}
export const pageIncrement = () => {
    return {
        type: "PAGE_INCREMENT",
    }
}
export const pageDecrement = () => {
    return {
        type: "PAGE_DECREMENT",
    }
}
export const pageDefault = (page) => {
    return {
        type: "PAGE_DEFAULT",
        payload: page
    }
}
export const setTotalPage = (page) => {
    return {
        type: "TOTAL_PAGE",
        payload: page
    }
}