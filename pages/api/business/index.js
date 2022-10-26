export default function business(req, res){
     try {
        if (req.method === "GET") {
            res.status(200).json({ message: "business news" })
        }
     } catch (err) {
        console.log("error occured", err)
        res.status(400).json({ message: err.message })
     }
}