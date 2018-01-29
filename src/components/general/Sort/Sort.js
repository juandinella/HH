import React, { Component } from 'react'
import './Sort.css'

class Sort extends Component {
  state = {
    expanded: false,
    value: 'Popular'
  }
  
  expand() {
    this.setState({ expanded: true });
  }
  
  collapse() {
    this.setState({ expanded: false });
  }
  
  handleItemClick(e) {
    this.setState({
      expanded: false,
      value: e.target.innerText
    });
  }
  
  handleTriggerClick() {
    this.setState({ expanded: !this.state.expanded });
  }
  
  render () {
    let sort = undefined;
    
    if (this.state.expanded) {
			sort = (
				<div className="list">
				{
					this.props.options.map(item => {
						return <div onClick={(e) => { this.handleItemClick(e); }} className="item">{item}</div>;
					})
				}
				</div>
			);
		}
    
    return (
      <div className={`sort ${this.state.expanded ? 'active' : ''}`}
        tabIndex="0"
        onBlur={() => { this.collapse(); }}>
        <div className="trigger" onClick={() => { this.handleTriggerClick(); }}>
          {this.state.value}
        </div>
        {sort}
      </div>
    );
  }
}
export default Sort
