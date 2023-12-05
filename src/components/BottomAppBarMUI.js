import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../styles/BottomAppBarMUI.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function BottomAppBarMUI() {
  return (
    <MDBFooter id='footer' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Contact our social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <FacebookIcon />
          </a>
          <a href='' className='me-4 text-reset'>
            <TwitterIcon />
          </a>
          <a href='' className='me-4 text-reset'>
            <GoogleIcon />
          </a>
          <a href='' className='me-4 text-reset'>
            <InstagramIcon />
          </a>
          <a href='' className='me-4 text-reset'>
            <LinkedInIcon />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                DOCTOR FINDER
              </h6>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacts</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Form
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Incident report
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Work with us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  If you want to be a supplier
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Legal</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Terms and Conditions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Consumer defense (claims)
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help me
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Addresses</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}


