import React, {Component} from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class SiteNavBar extends Component {
    render(){
        return(
            <Navbar bg='dark'>
                <Navbar.Brand>
                    
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
                </Navbar.Brand>
                <div className=''>
                    {this.props.actionButtons}
                </div>
            </Navbar>

        )
    }
}

export default SiteNavBar