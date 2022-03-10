import React, {useState} from 'react';
import styles from './styles/app.module.css';
import PostItem from "./component/PostItem";

function App() {
    let [posts, setPosts] = useState([
        {id:1,title:'JavaScript',body:'Language of programming'},
        {id:2,title:'php',body:'Language of programming'},
        {id:3,title:'Python',body:'Language of programming'},
        {id:4,title:'C++',body:'Language of programming'},
        {id:5,title:'Ruby',body:'Language of programming'},
    ]);
  return (
    <div className={styles.App}>
        {posts.map((post) => {
            <PostItem post={post} />
        })}
    </div>
  );
}

export default App;
