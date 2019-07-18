import {constants} from './index'
import {fromJS} from 'immutable'
import axios from 'axios'

export const focusAction={
    type:constants.SEARCH_FOCUS
} 


export const blurAction={
    type:constants.SEARCH_BLUR
}

export const mouseChange={
    type:constants.MOUSE_CHANGE
}

export const getList=()=>{
    return (dispatch)=>{
        axios.get('./api/headerList.json').then((res)=>{
            const data=res.data
            dispatch(changeList(data.data))
        }).catch(()=>{
            console.log("error")
        })
    }
}



const changeList=(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage: Math.ceil(data.length/10)
})