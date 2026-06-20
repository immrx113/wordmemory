import axios from "axios";
import router from "./router/index"
 
const service=axios.create({
    baseURL:"http://127.0.0.1:4523/m1/8435677-8205402-default",
    //配置请求头，告诉为json数据，自动解析成js数据
    headers: {
      'Content-Type': 'application/json'
    }
    //还可以配置timeout超时相应
})

// 请求拦截器
service.interceptors.request.use(
  config => {
//    // 从 localStorage 取出 token
      const token = localStorage.getItem('token');
      if (token) {
      //手动加到请求头里 好像不用bearer前缀
      //config.headers['Authorization'] = 'Bearer ' + token; 
      config.headers['Authorization'] = token; 

    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

   //响应拦截器 
  service.interceptors.response.use(
    //对响应数据进行处理
    response => {
      return response.data;
    },
    error =>{
    //token无效处理
    if (error.response){
     //token失效
    if(error.response.code === 400){
      // 删除本地token
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      //弹出信息
      //this.$message.warning(error.response.msg)
      // 跳转登录页
      router.push("/login")
    }
    }
    if(error.response.code === 500){
      //弹出信息
      this.$message.warning(error.response.msg)
    }
    return Promise.reject(error)
  }
  )

export default service