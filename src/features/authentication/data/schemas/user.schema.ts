import { Schema, model } from "mongoose";
import { UserEntity } from "../../domain/entities/user.entity";
import bcrypt from "bcryptjs";

const SALT_FACTOR = 10;

var UserSchema: Schema = new Schema<UserEntity>({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

UserSchema.pre("save", function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  const salt = bcrypt.genSaltSync(SALT_FACTOR);
  const hash = bcrypt.hashSync(user.password, salt);

  // override the cleartext password with the hashed one
  user.password = hash;
  next();

});

const UserModel = model<UserEntity>("User", UserSchema);

export default UserModel;
