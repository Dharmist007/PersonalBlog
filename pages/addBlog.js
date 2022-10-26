// import { useRouter } from "next/router"
import AddNewBlog from "../components/blogs/AddBlog"
export default function AddBlogPage() {
    // const router = useRouter()
    async function addBlogsToSite(enteredBlogData) {
        const response = await fetch("http://localhost:3001/api/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(enteredBlogData)
        })
        const data = await response.json()
        // router.push("/addBlog")
       
    }
    // addBlogsToSite()
    return <AddNewBlog onAddNewBlog = {addBlogsToSite}/>
}