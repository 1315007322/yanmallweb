import { post } from '../../utils/http'


const register = (data: {
    username: string,
    pwd: string
}) => {
    return post("/user/register", data)
}


export {
    register
}