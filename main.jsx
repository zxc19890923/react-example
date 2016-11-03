import React from "react";
import $ from "jquery";
// /main
var Main = React.createClass({
    // 初始化数据为空
    getInitialState() {
        return {
            data: [],
            searchName: ''
        }
    },
    // 切记bind(this);
    componentDidMount() {
        $.get(
            "./athlete.json",
            "json",
            function (data) {
                this.setState({
                    data: data
                })
            }.bind(this)
        );
    },
    // 单机过滤信息
    clickSearch() {
        $.get(
            "./searchAthlete.json",
            "json",
            function (searchResult) {
                this.setState({
                    data: searchResult
                })
            }.bind(this)
        )
    },
    changeValue(event) {
        var pm = "id=" + event.target.value;
        this.setState({
            searchName: event.target.value,
        })
        // 输入的时候就查询
        $.get(
            "./searchAthlete.json",
            pm,
            function (searchResult) {
                this.setState({
                    data: searchResult
                })
            }.bind(this)
        )
    },
    render() {
        var result = this.state.data.map(function (r) {
            return (
                <a href={"#/home/" + r.id} key={r.id}>
                    <div className="col-sm-4 col-xs-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    {r.id}
                                </div>
                            </div>
                            <div className="panel-body">
                                <p>姓名: {r.name}</p>
                                <p>职位: {r.position}</p>
                            </div>
                        </div>
                    </div>
                </a>
            )
        });
        return (
            <div className="container">
                {/* 搜索条件*/}
                <div className="row">
                    <div className="col-sm-10">
                        <p>
                            <input type="text" className="form-control" onChange={this.changeValue} />
                        </p>
                        {this.state.searchName}
                    </div>
                    <div className="col-sm-2">
                        <p>
                            <input type="button" className="btn btn-primary" value="查询" onClick={this.clickSearch}/>
                        </p>
                    </div>
                </div>
                <div className="row">
                    {result}
                </div>
            </div>
        )
    }
});
export default Main;