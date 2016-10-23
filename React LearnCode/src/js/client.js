import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{

	constructor(){
		super();
		this.name = "Name";
	}

	getValue(val){
		return "Value is " + val;
	}

	render(){
		return(
			<h1>It Works {this.name} {this.getValue(5)}</h1>
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
