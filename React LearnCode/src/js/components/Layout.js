import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{

	constructor(){
		super();
		// State only affect that components
		this.state = {
			title : "Constructor Title"
		};
	}

	render(){
		
		setTimeout(()=>{
			this.setState({title:"Changed Title"})
		},5000)

		// Inject prop to Title component
		const title = "New Title";

		return(
			<div>
				<Header title={title} />
				<Header title={this.state.title} />
				<Footer />
			</div>
		);
	}
}