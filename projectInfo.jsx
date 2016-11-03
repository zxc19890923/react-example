import React from "react";
import $ from "jquery";

// /project:id
var ProjectInfo = React.createClass({
    render() {
        return (
            <div><p>{this.props.idName}</p></div>
        )
    }
});

export default ProjectInfo;