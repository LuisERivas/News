import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import MainAdvert from '../MainAdvertisment'
import LatestNewsCluster from '../latestNews'
import SecondaryNewsCluster from '../SecondaryNewsCluster'
import SubscribeCluster from '../SubscribeCluster'
import OldNewsCluster from '../OldNewsCluster'

class Home extends Component{
    render(){
        return (
            <div className="App">
                <MainAdvert/>
                <hr className='container'></hr>
                <LatestNewsCluster/>
                <SubscribeCluster/>
                <hr className='container'></hr>
                <SecondaryNewsCluster/>
                <hr className='container'></hr>
                <OldNewsCluster/>
            </div>
        )
    }
}

export default Home