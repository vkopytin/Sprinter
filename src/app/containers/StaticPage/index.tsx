import * as React from 'react';

export { StaticPage }

class StaticPage extends React.Component<any, any> {
    public render() {
        if (this.props.children) {
            return (this.props.children);
        }
        return (<h1>I'm a Static Page</h1>);
    }
}
