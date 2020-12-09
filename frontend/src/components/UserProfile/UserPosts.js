import React from 'react'
import {Like} from '../../components/Posts/Like/index'
import {Share} from '../../components/Posts/Share/index'
import {Edit} from '../../components/Posts/Edit/index'
import {
    BottomContainer,
    TopContainer,
    ImageContainer,
    SharedContainer,
    DefaultAvatar,
    LargeImageContainer
} from '../../style/Posts/Posts'
// UserPost = user
export const UserPost = ({UserPost}) => {

    return (
        <>
            <TopContainer>
                <div id="avatar">
                    {UserPost.user.avatar ? (
                        <img src={UserPost.user.avatar} alt="Avatar"/>
                    ) : (
                        <DefaultAvatar><p>{UserPost.user.first_name[0]}</p></DefaultAvatar>
                    )}

                    <div id="name">
                        <h4>{UserPost.user.first_name + ' ' + UserPost.user.last_name}</h4>
                        <p id="created">{UserPost.created}</p>
                    </div>
                    {UserPost.shared ? <p id="shared">Shared a post</p> : <p></p>}
                </div>
                <div id="menu">
                    {UserPost.is_from_logged_in_user ? (
                        <Edit id={UserPost.id}/>
                    ) : null}
                </div>
            </TopContainer>
            <p id="content">{UserPost.content}</p>
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
            {UserPost.shared ? (
                <SharedContainer>
                    <UserPost post={UserPost.shared} viaShared={true} key={UserPost.id}/>
                </SharedContainer>
            ) : null}
            <BottomContainer>
                {UserPost.viaShared ? (
                        <p></p>
                    )
                    : (
                        <div id="socials">
                            <Like liked={UserPost.logged_in_user_liked} id={UserPost.id}/>
                            <Share id={UserPost.id}/>
                        </div>)}
                <p>{UserPost.amount_of_likes} likes</p>
            </BottomContainer>
        </>
    )
}