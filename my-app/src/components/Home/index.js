import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import MainAdvert from '../MainAdvertisment'
import LatestNewsCluster from '../latestNews'

class Home extends Component{
    render(){
        return (
            <div className="App">
                <MainAdvert/>
                <hr className='container'></hr>
                <LatestNewsCluster/>
            </div>
        )
    }
}

export default Home