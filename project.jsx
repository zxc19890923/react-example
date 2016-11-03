import React from "react";
import $ from "jquery";
// 加载子组件
import ProjectInfo from "./projectInfo";
// /project
var Project = React.createClass({
    render() {
        return (
            // 获取路由参数中的:id
            <div>
                <p>project</p>
                <a href="#/project/1">项目详细信息</a>
                {/* 子组件 */}
                <ProjectInfo idName={this.props.params.id}/>
            </div>
        )
    }
});
export default Project;