import * as React from 'react';

export { SiteLogo }

class SiteLogo extends React.Component<any, any> {
    private getLogo() {
        {/* TODO: Device detection needed */}
        return this.props.siteLogos || 'https://assets.rbl.ms/5418520/980x.jpg';
    }
    public render() {
        return (
            <div className="logo">
                <a href="/" className="logo__anchor">
                    <img src={this.getLogo()} className="logo__image" />
                </a>
            </div>
        );
    }
}
