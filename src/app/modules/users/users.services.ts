// contains database logic

import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { generateId } from './user.utils'
import { IUser } from './users.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id: string = await generateId()
  user.id = id

  // a dynamic default password for login first time
  if (!user.password) {
    user.password = config.defaultUserPassword as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new ApiError(400, 'Error creating user')
  }

  return createdUser
}

export default {
  createUser,
}
