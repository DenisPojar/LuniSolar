import React from 'react';
import {MDBFooter, MDBIcon} from 'mdb-react-ui-kit';
import '../Style/index.css';
import footerImage from '../Images/general-logo.svg';

export default function Footer() {
    return (
        <MDBFooter id='footer-container' backgroundColor='light' className='text-center text-lg-left container-fluid'>
            <div className="row footer-row">
                <div className="col-md-6" id="copyright-text">
                    <img id='footer-logo' src={footerImage} height='45'/>
                    <p id="copyright">Own Your Day <br/> ©{new Date().getFullYear()}, Copyright: LuniSolar</p>
                </div>
                <div className="col-md-6" id="social-links">
                    <a href='.'><MDBIcon fab icon="twitter-square" size='3x' /></a>
                    <a href='.'><MDBIcon fab icon="discord" size='3x' /></a>
                </div>
            </div>
        </MDBFooter>
    );
}