import { Schema, model } from "mongoose";
import { UserEntity } from "../../domain/entities/user.entity";
import bcrypt from "bcrypt";

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
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.validatePassword = async function (pass: string) {
  return bcrypt.compare(pass, this.password);
};

const UserModel = model<UserEntity>("User", UserSchema);

export default UserModel;
