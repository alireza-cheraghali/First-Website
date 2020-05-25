const userInfo={
    username:null,
}
export const userInformation=(state=userInfo,action)=>{
    if (action.type==="USER_INFORMATION"){
        return state.username=action.payload
    }
    return state
}