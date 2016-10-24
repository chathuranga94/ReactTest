import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component{

	render(){
		console.log(this.props);

		return(
			<div>
				<header>HEADER HERE</header>
				<Title title={this.props.title} />
			</div>
		);
	}
}