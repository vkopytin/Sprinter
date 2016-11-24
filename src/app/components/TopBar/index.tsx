import * as React from 'react';

export { TopBar }

class TopBar extends React.Component<any, any> {
    public render() {
        return (<div className="topbar-wrapper">
                    <div className={`rebelbar rebelbar--fixed skin-${this.props.format}`}>
                        <div className="rebelbar__inner">
                            {this.props.siteLogo}
                            {this.props.siteSection}
                            {this.props.searchForm}
                        </div>
                    </div>
                </div>
        );
    }
}
