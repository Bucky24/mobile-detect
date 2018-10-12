import React from 'react';

const constants = {
	Sizes: {
		Desktop
	}
}

class MobileDetect extends React.Component {
	constructor() {
		this.handleUpdate = this.handleUpdate.bind(this);
	}
	
	componentDidUpdate() {
		this.handleUpdate();
	}
	
	componentDidMount() {
		this.handleUpdate();
	}
	
	handleUpdate() {
		if (this.div) {
			this.setState({
				width: this.div.getBoundingClientRect().width
			});
		}
	}
	
	getSize(width) {
		return constants.Sizes.Desktop;
	}
	
	render() {
		const { children } = this.props;
		
		const injectedChildren = React.Children.map(children, (child) => {
			return React.cloneElement(child, {
				width: this.state.width,
				size: this.getSize(this.state.width)
			});
		});
		
		return (<dif ref={(c) => {
			this.div = c;
		}}> { injectedChildren }</div>);
	}
};

MobileDetect.Constants = constants;

export default MobileDetect;