import React, {Component} from 'react'
import { Card } from 'react-bootstrap'
import './index.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class SecondaryArticleCard2 extends Component{
    render(){
        return (
            <div className="">
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/600x600" className='imageSize' />
                    <Card.Body>
                        <Card.Text>
                            Barf
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default SecondaryArticleCard2