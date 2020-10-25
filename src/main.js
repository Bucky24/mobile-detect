import React from 'react';

export const Constants = {
	Sizes: {
		Desktop: 'Desktop'
	}
}

class MobileDetect extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			width: 0,
			height: 0
		};

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
			width: window.innerWidth,
			height: window.innerHeight
		});
	}
	
	getSize(width) {
		// stubbed for now
		return Constants.Sizes.Desktop;
	}
	
	render() {
		const { children } = this.props;
		
		const injectedChildren = React.Children.map(children, (child) => {
			return React.cloneElement(child, {
				width: this.state.width,
				height: this.state.height,
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

export default MobileDetect;