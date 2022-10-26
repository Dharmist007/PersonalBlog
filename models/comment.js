import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    blogId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Blog"
    },
    text : String, 
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }
})

CommentSchema.set("timestamps", true) 
CommentSchema.set("toJSON", { virtuals: true }) 
CommentSchema.set("toObject", { virtuals: true }) 

const Comment = mongoose.models.Comment || mongoose.model("Comment", CommentSchema)
export default Comment
