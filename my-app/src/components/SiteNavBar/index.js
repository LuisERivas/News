import React, {Component} from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

class SiteNavBar extends Component {
    render(){
        return(
            <Navbar bg='dark'>
                <Navbar.Brand>
                    <BrowserRouter>
                    <Link className='text-light' to='/'>
                    <img
                        alt='Logo'
                        src= {process.env.PUBLIC_URL + '/logo192.png'}
                        width='30'
                        height='30'
                        className=''
                    />
                    Martinez News Bruh
                    </Link>
                    </BrowserRouter>
                </Navbar.Brand>
            </Navbar>

        )
    }
}

export default SiteNavBar