export default function contactList(state=[], action){
    switch (action.type){
        case "contactAdded":
            return[
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name
                }
            ]
            default:
                return state
    }
}