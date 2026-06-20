import axios from "../axios"

export function login(username,password){
    //使用登录请求成功的mock
    return axios.post("/user/login",{
        username,
        password,
    })
}

export function register(username,password){
    //使用登录请求成功的mock
    return axios.post("/user/register",{
        username,
        password,
    })
}