import React, {useState} from 'react';
import '../Style/index.css';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse
} from 'mdb-react-ui-kit';
import Logo from '../Images/general-logo.svg';


export default function Header() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer md>
                <MDBNavbarBrand href='.'>
                    <img
                        src={Logo}
                        height='60'
                        alt=''
                        loading='lazy'
                    />
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas/>
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0' id='navbar-right-content'>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='.'>CALENDAR</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='.'>ABOUT US</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='connect-button-item'>
                            <MDBBtn outline rippleColor='warning' id='connect-button'>CONNECT</MDBBtn>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}