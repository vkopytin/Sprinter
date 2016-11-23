import * as React from 'react';

export { Block, Blocks, Row, Column }

class Block extends React.Component<any, any> {
    public render() {
        return <div data-block={'block' + this.props.name}>{this.props.children}</div>;
    }
}

class Blocks extends React.Component<any, any> {
    public render() {
        return <div data-block={'blocks' + this.props.name}>{this.props.children}</div>;
    }
}

class Column extends React.Component<any, any> {
    public render() {
        return <div data-block={'column' + this.props.name}>{this.props.children}</div>;
    }
}

class Row extends React.Component<any, any> {
    public render() {
        return <div data-block={'row' + this.props.name}>{this.props.children}</div>;
    }
}
