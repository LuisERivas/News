import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class LatestNewsCluster extends Component{
    render(){
        return (            
            <div className='row bg-danger container m-auto'>
                <div className='col-8 bg-primary p-0'>
                    Main article card
                </div>
                <div className='col-4 bg-dark'>
                    <div className='row bg-light'>
                        spoink
                    </div>
                    <div className='row bg-light'>
                        parf
                    </div>
                    <div className='row bg-light'>
                        fnarf
                    </div>
                </div>
                <div className='row container'>
                    <div class='col'>
                        spork
                    </div>
                    <div class='col'>
                        fork
                    </div>
                    <div class='col'>
                        mork
                    </div>
                    <div class='col'>
                        pork
                    </div>
                </div>
            </div>
        )
    }
}

export default LatestNewsCluster