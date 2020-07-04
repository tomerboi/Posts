import React, { Component } from "react";

const AsyncComponent = (componentFunc) => {
    return class extends Component{
        state = {
            component : null
        }
    
        ComponentDidMount(){
            componentFunc()
                .then(cmp => {
                    this.setState({component : cmp.default});
                });
            
        }

        render(){
            const C = this.state.component;
            return C ? <C {...this.props}/> : null;
        }
    }
    
}

export default AsyncComponent;