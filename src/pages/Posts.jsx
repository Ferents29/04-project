import React, {useEffect, useRef, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../component/API/postService";
import {getPageCount} from "../utils/pages";
import MyButton from "../component/UI/Button/MyButton";
import MyModal from "../component/UI/MyModal/MyModal";
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import Loader from "../component/UI/Loader/Loader";
import PostsList from "../component/PostsList";
import Pagination from "../component/UI/Pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../component/UI/select/MySelect";

function Posts() {
    const [posts, setPosts] = useState([
        {id:1,title:'JavaScript',body:'Language of programming'},
        {id:2,title:'php',body:'Language of programming'},
        {id:3,title:'Python',body:'Language of programming'},
        {id:4,title:'C++',body:'Language of programming'},
        {id:5,title:'Ruby',body:'Language of programming'},
    ]);
    const [filter,setFilter] = useState({sort:'',query:''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()
    const observer = useRef()

    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    },[page, limit] )

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className={'App'}>
            <div>
                <div style={{marginBottom:20}}>
                    <span>Количество постов на странице</span>
                    <MySelect
                        value={limit}
                        onChange={value => setLimit(value)}
                        defaultValue={'Количество элементов на странице'}
                        options={[
                            {value:5,name:'5'},
                            {value:10,name:'10'},
                            {value:15,name:'15'},
                            {value:20,name:'20'},
                            {value:25,name:'25'},
                            {value:-1,name:'Показать все'},
                        ]}
                    />
                </div>

                <MyButton onClick={() => setModal(true)}>
                    Добавить пост
                </MyButton>
            </div>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: 15}} />
            <PostFilter filter={filter}
                        setFilter={setFilter}/>
            {postError && <h1>произошла ошыбка ${postError}</h1>}
            <div>
                <PostsList posts={sortedAndSearchedPosts}
                           remove={removePost}
                           title={'Список постов про языки програмирования'}/>
                <div ref={lastElement} style={{height:20, backgroundColor:'red',}}></div>
                {isPostLoading &&
                    <Loader />
                }
                <Pagination page={page}
                            changePage={changePage}
                            totalPages={totalPages} />
            </div>
        </div>
    );
}

export default Posts;
