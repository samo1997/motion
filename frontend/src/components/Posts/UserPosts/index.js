import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../../../store/actions/postAction'
import { CreatePost } from '../CreatePost/index'
import { SET_POSTS_ALL } from '../../../helpers/constants'
import { GridElement, GridContainer, } from '../../../style/Posts/Posts'
import { Post } from '../Post/index';
import { Loading } from '../../Loading/index'

export const Posts = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.userReducer.user.first_name)
    const posts = useSelector(state => state.postReducer.postsAllChron)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPostsData = async () => {
            await dispatch(postAction('user/profile/', 'GET', SET_POSTS_ALL));
            setIsLoading(false)
        }
        fetchPostsData();

        return function cleanup() {};
    }, []);


    return (<>
        {isLoading ? (
                <Loading />
        ) : (
            <GridContainer>
                <GridElement id="new-post" height="120px"><CreatePost user={userName} key="0" /></GridElement>
                {posts.map(post => <GridElement><Post post={post} key={post.id}/></GridElement>)}
            </GridContainer>
        )}
    </>)
}
