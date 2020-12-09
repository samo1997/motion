import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../../../store/actions/postAction'
import { CREATE_NEW_POST } from '../../../helpers/constants'
import { PurpleSendButton } from '../../../style/Buttons'
import { ModalContainerCreatePost, ExternalContainer, CloseButtonContainer } from '../../../style/Posts/Modals'
import Sami from '../../../assets/images/users/SamiKlein.png'
import ImageIcon from '../../../assets/svgs/image.svg'
import LinkIcon from '../../../assets/svgs/link.svg'
import SendIcon from '../../../assets/svgs/send_button.svg'

export const CreatePost = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user)
    const [newPost, setNewPost] = useState('');
    const [images, setImages] = useState();

    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const textInputHandler = e => {
        setNewPost(e.currentTarget.value);
    }

    const imageInputHandler = e => {
        setImages(e.currentTarget.value);
    }

    const imageURLInputHandler = e => {
        setImages(e.currentTarget.value);
    }

    const onSubmitHandler = async e => {
        e.preventDefault();
        const body = `{ "content": "${newPost}" }`; //TODO implement when images can be uploaded { "images": ${images} }
        dispatch(postAction('social/posts/', 'POST', CREATE_NEW_POST, body));
    }

 
    return (
    <>
        <img id="avatar" width="60px" height="60px" src={Sami} alt="Profile Avatar" />
        <input type="text" style={{"width": "300px"}} onClick={handleShow} placeholder={`What's on your mind, ${user.first_name}?`}></input> {/*${props.userName}*/}
        <PurpleSendButton onClick={handleShow}><img src={SendIcon} alt="Add Post" /></PurpleSendButton>
        
        {show ? (
        <ExternalContainer >
            <CloseButtonContainer>
                <button id="closeButton" onClick={handleClose}>X</button>
                <ModalContainerCreatePost>
                    <form onSubmit={onSubmitHandler}>
                        <img id="avatar" width="60px" height="60px" src={Sami} alt="Profile Avatar" />
                        <input type="text" style={{"width": "300px"}} name="newPost" value={newPost} onChange={textInputHandler} placeholder={`What's on your mind, ${user.first_name}?`}></input> 
                        <input type="file" multiple={true} onChange={imageInputHandler}></input><img src={ImageIcon} alt="Add"></img>                    
                        <input type="file" multiple={false} onChange={imageURLInputHandler}></input><img src={LinkIcon} alt="Add URL" />                   
                        <PurpleSendButton type="submit" ><img src={SendIcon} alt="Add Post" /></PurpleSendButton>
                    </form >
                </ModalContainerCreatePost>
            </CloseButtonContainer>
        </ExternalContainer>
        ) : null}
    </>
    );
}