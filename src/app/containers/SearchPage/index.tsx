import * as React from 'react';

export { SearchPage }

class SearchPage extends React.Component<any, any> {
    public render() {
        if (this.props.children) {
            return (this.props.children);
        }
        return (<h1>I'm a Search Page</h1>);
    }
}
