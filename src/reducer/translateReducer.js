const initalState = {
    language: 'ENV',
}

export default function (state = initalState, action) {
    switch (action.type) {
        case "TRANSLATE_SUCCESS":
            return {
                ...state,
                language: action.payload
            }
        default:
            return state
    }
}