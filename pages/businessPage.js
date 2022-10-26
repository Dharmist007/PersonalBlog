// import { useRouter } from "next/router"
// import { useEffect, useState } from "react"
import GetBlog from "../components/blogs/SingleBlog";
export default function BusinessHtml() {
    // const router = useRouter()
    async function fetchBusinessBlogs() {
        const response = await fetch("http://localhost:3001/api/business", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()

        // router.push("/business")

    }
    // fetchBusinessBlogs()
    console.log("hello hi");

    return <GetBlog/>
}