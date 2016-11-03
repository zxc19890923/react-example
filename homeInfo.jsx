var React = require("react");
var $ = require("jquery");

// /home/id
var HomeInfo = React.createClass({
    getInitialState() {
        return {
            data: []
        }
    },
    componentDidMount() {
        // 这个是查询条件, 网络服务器的查询条件
        // var id = this.props.params.id;
        $.get(
            "./athleteInfo.json",
            "json",
            function (data) {
                this.setState({
                    data: data
                })
            }.bind(this));
    },
    render() {
        // 自定义样式文件
        var fontSize = {
            fontSize: 30
        };

        var infoResult = this.state.data.map(function(r) {
            return (
                <div key={r.id}>
                    <p className="text-danger">{r.id}</p>
                    <p className="text-primary">{r.info}</p>
                </div>
            )
        });
        return (
            <div className="container">
                <p>当前球员编号: <span className="text-danger" style={fontSize}>{this.props.params.id}</span>号</p>
                {infoResult}
            </div>
        )
    }
});
export default HomeInfo