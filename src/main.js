import React from 'react';

const constants = {
	Sizes: {
		Desktop: 'Desktop'
	}
}

class MobileDetect extends React.Component {
	constructor(props) {
		super(props);

		this.handleUpdate = this.handleUpdate.bind(this);
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.handleUpdate);
		this.handleUpdate();
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleUpdate);
	}
	
	handleUpdate() {
		this.setState({
			width: window.innerWidth
		});
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
		
		return (<div style={{
			width: '100%',
			height: '100%',
			position: 'relative'
		}}>{ injectedChildren }</div>);
	}
};

MobileDetect.Constants = constants;

export default MobileDetect;