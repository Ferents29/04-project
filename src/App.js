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

  return (
      <>
          <PostForm create={createPost}/>
        <PostsList posts={posts}
                   title={'Список постов про языки програмирования'}/>
      </>
  );
}

export default App;
