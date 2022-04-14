import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../component/API/postService";
import Loader from "../component/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const  [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const  [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
    return (
        <div>
            <h1>Вы открыли страницу поста с ID -- {params.id}.</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id} {post.title}</div>
            }
            <h1>Комментарии</h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(com =>
                        <div style={{marginTop: 10,
                                    width: '50%',
                                    border: "solid 3px green",
                                    padding: 5}}>
                            <h5 style={{color:'red'}}>{com.email}</h5>
                            <h3>{com.name}</h3>
                            <div>{com.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

export default PostIdPage;