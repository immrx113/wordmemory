import axios from "../axios"

//export function bookinfromation(){
//    //获取书本信息
//    return axios.get("/473059868",{
//        username,
//        password,
//    })
//}

//获得单词列表 没有page size 组件内部无法获取
export function getWordList(){
    return axios.get("/word-books/1/words")
}

export function getBookList(page,size){
    return axios.get("/word-books",{
        params:{
        page,
        size,
    }
    })
}