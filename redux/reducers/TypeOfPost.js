const TypeOfPosts=null
export const TypeOfPost=(state=TypeOfPosts,action)=>{
    if (action.type==="Video"){
        return state=action.payload
    }else if  (action.type==="Text"){
        return state=action.payload
    }else if  (action.type==="Audio"){
        return state=action.payload
    }else if (action.type==="Image"){
        return state=action.payload
    }
    return state
}