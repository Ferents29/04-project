import React from 'react';
import styles from "../styles/app.css";
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostsList = ({posts, title, remove}) => {
    if ( !posts.length ){
        return <h1 style={{textAlign:"center"}}>Посты отсутсвуют</h1>
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <div className={styles.App}>
                <TransitionGroup>
                    {posts.map((post, index) =>
                    <CSSTransition timeout={500}
                                   classNames={'post'}
                                   key={post.id}>
                        <PostItem remove={remove}
                                  post={post}
                                  number={index + 1} />
                    </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default PostsList;