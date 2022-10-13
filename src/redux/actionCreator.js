export function createAction(actionType,payload){
    return {
        type:actionType,
        payLoad:payload
    }
}