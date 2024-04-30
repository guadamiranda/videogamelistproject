import model from "../../infraestructure/repository/models/user";
import { userModel } from "../../domain/models/user";

const buildUserModel = (userCreated: any): userModel => {
  return {
    name: userCreated.name,
    email: userCreated.email,
    password: userCreated.password,
    userName: userCreated.userName,
  } as userModel;
};

const getUser = async (): Promise<userModel[]> => {
  const userMongoModel = await model.find();

  return userMongoModel.map(user => buildUserModel(user));
};

const createUser = async (userModel: userModel): Promise<userModel> => {
  const userCreated = await model.create({
    name: userModel.name,
    email: userModel.email,
    password: userModel.password,
    userName: userModel.userName,
  });

  return buildUserModel(userCreated);
};

const authenticateUserFromDB = async (userName:string, password:string):Promise<userModel> => {
    const authUser = await model.find({ $and: [{ userName: userName }, { password: password }] })

    if (authUser.length === 0) {
      return null;
    }

    return buildUserModel(authUser[0])
}

export { createUser, getUser, authenticateUserFromDB };
