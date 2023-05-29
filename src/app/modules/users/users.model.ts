import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

// type UserModel = Model<IUser, object, IUserMethods>
type UserModel = Model<IUser, object>

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true } //mongoose will set createdAt and updatedAt fields automatically
)

export const User = model<IUser, UserModel>('User', userSchema)
