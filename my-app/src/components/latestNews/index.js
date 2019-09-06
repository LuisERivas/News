import React, {Component} from 'react'
import MainArticleCard from '../MainArticleCard/index.js'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ArticleCard1 from '../ArticleCard1/index.js'

class LatestNewsCluster extends Component{
    render(){
        return (            
            <div className='row bg-danger container m-auto'>
                <div className='col-8 bg-primary p-0'>
                    <MainArticleCard/>
                </div>
                <div className='col-4 bg-dark p-0'>
                    <div className='row bg-light m-0 container '>
                        <ArticleCard1/>
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