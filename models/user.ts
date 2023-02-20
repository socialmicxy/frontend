import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  profileUrl: string;
  email: string;
  googleId: string;
  connectedAccounts: {
    accountType: string;
    token: string;
    refreshToken: string;
    id: string;
    expiresIn: number;
  }[];
  musicsyncspace: boolean;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  username: String,
  profileUrl: String,
  email: String,
  googleId: String,
  connectedAccounts: [
    {
      accountType: String,
      token: String,
      refreshToken: String,
      id: String,
      expiresIn: Number,
    },
  ],
  musicsyncspace: Boolean,
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
