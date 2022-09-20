import { Button, Descriptions } from "antd"
import { useEffect } from "react"
import { UserApiModule } from 'Src/api'


const UserInfo = () => {

    const userId = JSON.parse(localStorage.getItem("user") || "{}").id


    useEffect(() => {
        getUserDetail()
    },[])

    const getUserDetail = async () => {
        const res = await UserApiModule.getUserDetailById(userId)
        console.log(res);
        
    }

    return (
        <Descriptions
            title="User Info"
            extra={<Button type="primary">修改信息</Button>}
        >
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
        </Descriptions>
    )
}

export default UserInfo;