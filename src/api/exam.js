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
      bookId: 1,   
      page: 1,
      size: 5
    }
  });
}