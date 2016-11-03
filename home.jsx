import React from "react";
import $ from "jquery";

// 首页组件
import Main from "./main.jsx";
// 首页详细信息组件
import HomeInfo from "./homeInfo.jsx";
// about组件
import About from "./about";
// 项目组件
import Project from "./project";
// 项目详情
import ProjectInfo from "./projectInfo";

// react路由控制
import {Router, Route, hashHistory} from 'react-router';
// 定义根组件,放置路由
var Home = React.createClass({
    render() {
        return (
            <div>
                {/*当行条*/}
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#navbar">
                                <span className="sr-only">切换导航</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#/">NBA</a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="nav navbar-nav" role="nav">
                                <li><a href="#/">首页</a></li>
                                <li><a href="#/about">关于</a></li>
                                <li><a href="#/project">项目</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* 路由 */}
                <Router history={hashHistory}>
                    <Route path="/" component={Main}/>
                    <Route path="/home/:id" component={HomeInfo}/>
                    <Route path="/about" component={About}/>
                    {/* 嵌套路由 */}
                    <Route path="/project" component={Project}>
                        <Route path="/project/:id" component={ProjectInfo}/>
                    </Route>
                </Router>
            </div>
        )
    }
});

export default Home;