import {React,useState,useEffect} from 'react'
import "./Posts.css"
import {Card,CardBody} from "reactstrap";
function Post() {
   const [post,SetPost] =useState([])
const URL='https://jsonplaceholder.typicode.com/posts'
   useEffect(() => {
     async function fetchMyAPI() {
   let response = await fetch('https://jsonplaceholder.typicode.com/posts')
   response = await response.json()
  console.log(response);
  SetPost(response)
 }

 fetchMyAPI()
   }, [])

function removeData(index){
  console.log(index);
  SetPost(post.filter(item=>item.id!==index))
}
  return (
    <div className="post">
        {  !post ? ("No Data Found"):(
            <table class="table table-hover">
            <thead>
              {
                 post.map((posts,index)=>(
                   <tr key={index}>
                     <Card>
                           <CardBody>
                             <td>{posts.id}</td>
                             <td>{posts.userId}</td>
                             <td>{posts.title}</td>
                             <td><button onClick={(e)=>{
                                   e.preventDefault();
                                   removeData(posts.id)}}>On Close</button></td>
                           </CardBody>
                     </Card>

                   </tr>
                 ))
               }
           </thead>
            </table>
          )
        }
    </div>
  )
}

export default Post
