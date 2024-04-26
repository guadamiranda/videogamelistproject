import { createUser } from "../../infraestructure/repository/users";
import { userModel } from "../../domain/models/user";

export const addUser = async (userModel: userModel):Promise<userModel> => {
  const userCreated = await createUser(userModel);

  return userCreated;
};
