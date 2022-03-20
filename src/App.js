import React, {useState} from 'react';
import PostsList from "./component/PostsList";
import PostForm from "./component/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id:1,title:'JavaScript',body:'Language of programming'},
        {id:2,title:'php',body:'Language of programming'},
        {id:3,title:'Python',body:'Language of programming'},
        {id:4,title:'C++',body:'Language of programming'},
        {id:5,title:'Ruby',body:'Language of programming'},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
      <>
          <PostForm create={createPost}/>
          {posts.length !== 0
              ? <PostsList posts={posts}
                           remove={removePost}
                           title={'Список постов про языки програмирования'}/>
              : <h1 style={{textAlign:"center"}}>Посты отсутсвуют</h1>
          }
      </>
  );
}

export default App;
