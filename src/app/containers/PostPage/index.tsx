import * as React from 'react';

export { PostPage }

class PostPage extends React.Component<any, any> {
    public render() {
        if (this.props.children) {
            return (this.props.children);
        }
        return (<h1>I'm a Post Page</h1>);
    }
}
