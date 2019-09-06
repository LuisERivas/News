import React, {Component} from 'react'
import { Card } from 'react-bootstrap'
import './index.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class MainArticleCard extends Component{
    render(){
        return (
            <div className="">
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150x75" />
                    <Card.Body>
                        <Card.Text>
                            Text From article will go here
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default MainArticleCard