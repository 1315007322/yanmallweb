import { post } from '../../utils/http'


//查询用户详情
export const getUserDetailById = (id: number) => {
    return post("/user/detail", id)
}

