const initalState = {
    value: ''
}

export default function (state = initalState, action) {
    switch (action.types) {
        case "Get_Picture_Success":
            return {
                ...state,
                value: action.payload

            }
            default : 
            return state
    }
}