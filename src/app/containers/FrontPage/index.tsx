import * as React from 'react';

export { FrontPage }

class FrontPage extends React.Component<any, any> {
    public render() {
        if (this.props.children) {
            return (this.props.children);
        }
        return (<h1>I'm a Front Page</h1>);
    }
}
