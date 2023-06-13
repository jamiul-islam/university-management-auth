// contains database logic

import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateFacultyId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id

  // fake academic semester for first user
  // const academicSemester = {
  //   title: 'Fall',
  //   code: '01',
  //   year: '2025',
  //   startMonth: 'January',
  //   endMonth: 'May',
  // };

  const id: string = await generateFacultyId();
  user.id = id;

  // a dynamic default password for login first time
  if (!user.password) {
    user.password = config.defaultUserPassword as string;
  }

  const createdUser = await User.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Error creating user');
  }

  return createdUser;
};

export const UserService = {
  createUser,
};
