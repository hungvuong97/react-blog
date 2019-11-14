const initalState = {
    auth: false,
    value: ''
}

export default function (state = initalState, action) {
    switch (action.types) {
        case "Login_Success":
            return {
                ...state,
                auth: true,
                value: action.payload

            }
        default: return state
    }
}