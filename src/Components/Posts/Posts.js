import {React,useState,useEffect} from 'react'
import "./Posts.css"
function Post() {
   const [post,SetPost] =useState(null)
   useEffect(() => {
     async function fetchMyAPI() {
   let response = await fetch('https://jsonplaceholder.typicode.com/posts')
   response = await response.json()
  console.log(response);
  SetPost(response)
 }

 fetchMyAPI()
   }, [])
  return (
    <div className="post">
        {  !post ? ("No Data Found"):(
            <table class="table table-hover">
            <thead>
                 post.map(()=>(
                   
                 ))
           </thead>
            </table>
          )
        }
    </div>
  )
}

export default Post
