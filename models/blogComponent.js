import mongoose from "mongoose"

const BlogComponentSchema = new mongoose.Schema({
    _blogId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Blog"
    },
    contentType: {
        type: String,
        enum: ["text", "image"]
    },
    content: String
})

BlogComponentSchema.set("timestamps", true)
BlogComponentSchema.set("toJSON", { virtuals: true })
BlogComponentSchema.set("toObject", { virtuals: true })

export default mongoose.model("BlogComponent", BlogComponentSchema)