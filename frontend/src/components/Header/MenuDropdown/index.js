import React, { useState } from 'react'
import { ExternalContainer, ModalContainerMenu } from '../../../style/Posts/Modals'
import Logout from '../../../assets/svgs/logout.svg'

export const MenuDropdown = ({ inHover }) => {
    const [show, setShow] = useState(true);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logoutHandler = () => {
        localStorage.clear();
        window.location.reload()
    }

    return (<>
    {show ? ( 
        <ExternalContainer onClick={() => setShow(false)}>
            <ModalContainerMenu onClick={() => logoutHandler()}>
                <img src={Logout} alt="Logout"/>
                <p>Logout</p>
            </ModalContainerMenu>
    </ExternalContainer>
    ) : null }
   </> )
}