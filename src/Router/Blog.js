import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Blog() {

    const [blog, setblog] = useState([])

    useEffect(() => {
        async function data() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts/")
            setblog(res.data)
        }

        data()
    }



        , [])
    return (
        <div>Blog
            {

                blog.map((d ,ind) => {
                    return (

                        <div key={ind}>
                            <h1>{d.id}</h1>
                            <h2><Link to ={`/blog/${d.id}`}>{ d.title}</Link></h2>
                            <p>{d.body}</p>

                        </div>


                    )
                } )
            }
            </div>
    )

        }
export default Blog