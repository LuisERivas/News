import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class HomeButton extends Component{
    render(){
        return (
            <Button className='bg-light'>
                <Link className='text-dark' to='/'>
                Barf
                </Link>
            </Button>
        )
    }
}

export default HomeButton