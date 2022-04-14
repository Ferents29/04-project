import React from 'react';
import styles from "../styles/app.css";
import MyButton from "./UI/Button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate();
    console.log(navigate)
    return (
        <div className={styles.post}>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div className={'post_content'}>
                {props.post.body}
            </div>
            <div className={'post_btns'}>
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Открыть пост
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить пост
                </MyButton>
            </div>
        </div>
    );
}

export default PostItem;