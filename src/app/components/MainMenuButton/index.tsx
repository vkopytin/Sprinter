import * as React from 'react';

export { MenuButton }

class MenuButton extends React.Component<any, any> {
    public render() {
        // TODO: put stypes for this button here or in a nearby folder
        return (
            <button className="menu-button" onClick={this.props.onClick}>
                <i className="fa fa-bars" />
            </button>
        );
    }
}
