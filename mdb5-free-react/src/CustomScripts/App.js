import React from 'react';
import {MDBBtn, MDBContainer} from 'mdb-react-ui-kit';
import '../Style/index.css';
import Header from '../Components/Header';
import Footer from "../Components/Footer";

import processImage from '../Images/process.png';

function App() {
    return (
        <React.Fragment>
            <Header/>

            <MDBContainer breakpoint="md" id='info-text'>
                <h1 className="display-6">Sorry! the website is currently under development.</h1>
            </MDBContainer>
            <MDBContainer breakpoint="md" id='process'>
                <img id='process-image' className='img-fluid mx-auto d-block' src={processImage} alt=''/>
            </MDBContainer>

            <Footer />
        </React.Fragment>
    );
}

export default App;
