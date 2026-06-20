import service from "../axios";

export function getExamQuestions(data) {
  return service({
    url: "/exam/start",
    method: "post",
    data
  });
}

//获取考试历史记录
export function getExamRecords() {
  return service({
    url: "/exam/records",
    method: "get",
    params: {  
      page: 1,
      size: 5
    }
  });
}

//提交考试结果
export function submitExamResult(data) {
  return service({
    url: "/exam/submit",
    method: "post",
    data: {
      bookId: data.bookId,
      score: data.score
    }
  });
}