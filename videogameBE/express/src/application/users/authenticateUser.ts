import { authenticateUserFromDB } from "../../infraestructure/repository/users";
import { userModel } from "../../domain/models/user";

const buildUserModel = (user):userModel => {
    return {
        name: user.name,
        email: user.email,
        password: user.password,
        userName: user.userName
    } as userModel
}

export const authenticateUser = async(userName:string, password:string):Promise<userModel> => {
    const userFind = await authenticateUserFromDB(userName, password)
    return buildUserModel(userFind)  
}
