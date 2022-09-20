import { post } from '../../utils/http'


//注册接口
export const register = (data: {
    username: string,
    pwd: string
}) => {
    return post("/user/register", data)
}

//登录接口
export const login = (data: {
    username: string,
    pwd: string
}) => {
    return post("/user/login", data)
}

