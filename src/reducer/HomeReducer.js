const intialState = {sub:null}

export function sub(state=intialState,action){
    switch(action.type){
        case "FETCH_REQUEST":
           return Object.assign({}, state,{
               sub: action.sub
           })
        case "FETCH_SUCCESS":
            return Object.assign({}, state,{
                sub: action.sub
            })
        default:
            return state
    }
}

export default sub;