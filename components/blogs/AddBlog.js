import { useRef } from 'react'
export default function AddNewBlog(props) {
    const titleInputRef = useRef()
    const textBlogInputRef = useRef()
    function submitHandler(event){
        console.log("submit handler working fine")
        event.preventDefault()
        const enteredTitle = titleInputRef.current.value
        const enteredBlog = textBlogInputRef.current.value
        const blogdata = {
            title: enteredTitle,
            textBlog: enteredBlog
        } 
        props.onAddNewBlog(blogdata)
    }
    return (
        <div>
            <form onSubmit = {submitHandler}>
            title:<input type = "text" id="title" ref={titleInputRef}/>
            blog:<input type = "text" id="textBlog" ref={textBlogInputRef}/>
            <button>Add Blog</button>
            </form>
            
        </div>
    )
}