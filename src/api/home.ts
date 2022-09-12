import { post } from '../../utils/http'


//注册接口
const register = (data: {
    username: string,
    pwd: string
}) => {
    return post("/user/register", data)
}

//登录接口
const login = (data: {
    username: string,
    pwd: string
}) => {
    return post("/user/login", data)
}


export {
    register,
    login
}