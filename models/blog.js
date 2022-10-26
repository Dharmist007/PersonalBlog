import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema({
    title: String,
    nLikes: {
        type: Number,
        default: 0
    },
    NumComments: {
        type: Number,
        default: 0
    },
    Author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    // textBlog: String
})

BlogSchema.set("timestamps", true)
BlogSchema.set("toJSON", { virtuals: true })
BlogSchema.set("toObject", { virtuals: true })

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema)
export default Blog
