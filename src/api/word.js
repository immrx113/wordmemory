import axios from "../axios"

//获取学习单词列表
export function getStudyWords(count){
    return axios.get("/word-books/1/study",{
        params:{
            count
        }
    })
}

// 更新单词状态
export function updateWordStatus(wordId, status) {
  return axios.put(`/user-words/${wordId}/status`, {
    wordStatus: status
  });
}