import models from '../models/index';

const { User } = models;

export const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

export const getSingleUser = async (id) => {
  const user = await User.findById(id);
  return user;
};

export const postUser = async (user) => {
  const newUser = new User(user);
  const saveUser = await newUser.save();
  return saveUser;
};

export const putUser = async (user) => {
  // eslint-disable-next-line
  const updateUser = User.findByIdAndUpdate( user._id, user, { new: true });
  return updateUser;
};

export const deleteUser = async (id) => {
  const user = User.findOneAndRemove(id);
  return user;
};
