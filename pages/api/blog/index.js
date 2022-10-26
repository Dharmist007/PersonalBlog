import connectMongo from "../../../utils/connectMongo"
import Blog from "../../../models/blog"
export default async function business(req, res){
    try {
       if (req.method === "POST") {
        console.log("req object ==>", req.body)
        const { title, textBlog } = req.body
        await connectMongo()
        await Blog.create({
            title,
            textBlog
        })
        res.status(200).json({ message: "This is blog addition" })
       }
    } catch (err) {
       console.log("error occured", err)
       res.status(400).json({ message: err.message })

    }
}