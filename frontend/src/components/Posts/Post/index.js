import React from 'react'
import {Like} from '../Like/index'
import {Share} from '../Share/index'
import {Edit} from '../Edit/index'
import {
    BottomContainer,
    TopContainer,
    ImageContainer,
    SharedContainer,
    DefaultAvatar,
    LargeImageContainer
} from '../../../style/Posts/Posts'

export const Post = ({post}) => {

    return (
        <>
            <TopContainer>
                <div id="avatar">
                    {post.user.avatar ? (
                        <img src={post.user.avatar} alt="Avatar"/>
                    ) : (
                        <DefaultAvatar><p>{post.user.first_name[0]}</p></DefaultAvatar>
                    )}

                    <div id="name">
                        <h4>{post.user.first_name + ' ' + post.user.last_name}</h4>
                        <p id="created">{post.created}</p>
                    </div>
                    {post.shared ? <p id="shared">Shared a post</p> : <p></p>}
                </div>
                <div id="menu">
                    {post.is_from_logged_in_user ? (
                        <Edit id={post.id}/>
                    ) : null}
                </div>
            </TopContainer>
            <p id="content">{post.content}</p>
            { /* post.images.length > 1 ? (
                <ImageContainer>
                    {post.images.map((image, index) => <img src={image} key={post.id, index}
                                                            alt="Small View Pictures"/>)}
                </ImageContainer>
            ) : null}
            {post.images.length === 1 ? (
                <LargeImageContainer>
                    <img src={post.images[0]} alt="Large View"/>
                </LargeImageContainer>
            ) : null */}
            {post.shared ? (
                <SharedContainer>
                    <Post post={post.shared} viaShared={true} key={post.id}/>
                </SharedContainer>
            ) : null}
            <BottomContainer>
                {post.viaShared ? (
                        <p></p>
                    )
                    : (
                        <div id="socials">
                            <Like liked={post.logged_in_user_liked} id={post.id}/>
                            <Share id={post.id}/>
                        </div>)}
                <p>{post.amount_of_likes} likes</p>
            </BottomContainer>
        </>
    )
}