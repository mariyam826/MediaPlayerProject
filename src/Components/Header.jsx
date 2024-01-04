import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand  className='fw-bolder' style={{fontSize:'25px'}}>
                <Link to={'/'} style={{textDecoration:'none',color:'gray'}} >
                    <i class="fa-solid fa-cloud-arrow-up fa-beat me-2"></i>
                    Media Player
                </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header