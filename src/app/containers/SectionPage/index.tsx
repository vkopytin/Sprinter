import * as React from 'react';

export { SectionPage }

class SectionPage extends React.Component<any, any> {
    public render() {
        if (this.props.children) {
            return (this.props.children);
        }
        return (<h1>I'm a Section Page</h1>);
    }
}
