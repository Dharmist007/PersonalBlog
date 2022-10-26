import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    profilePic: String,
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        default: "Qwerty@123",
        // required: true
    },
    forgotpassword: {
        requestedAt: { type: Date, default: null },
        token: { type: String, default: null },
        expiresAt: { type: Date, default: null },
    },
})

UserSchema.set("timestamps", true)
UserSchema.set("toJSON", { virtuals: true })
UserSchema.set("toObject", { virtuals: true })

const User = mongoose.models.User || mongoose.model("User", UserSchema)
export default User
