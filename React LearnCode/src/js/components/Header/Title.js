import React from "react";

export default class Title extends React.Component{

	render(){
		return(
			<div>
				<h3>HEADER TITLE</h3>
				<h3>{this.props.title}</h3>
			</div>
		);
	}
}