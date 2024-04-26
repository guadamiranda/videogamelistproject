import { getUser } from "../../infraestructure/repository/users";
import { userModel } from "../../domain/models/user";

export const getUsers = async ():Promise<userModel[]> => {
    const allUsers = await getUser();
    return allUsers;
  };