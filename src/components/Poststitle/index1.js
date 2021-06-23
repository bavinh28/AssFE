import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'

const Title1 = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const API ='http://localhost:1337/posts'
    useEffect(() => {
        fetch(`${API}/${id}`).then(response => response.json()).then(data =>setPost(data))
    }, []);
    return (
        <div>
            {post.desc}
        </div>
    )
}

export default Title1
