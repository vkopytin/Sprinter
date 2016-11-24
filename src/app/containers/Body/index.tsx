const appConfig = require('../../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import { MainMenu } from '../../components';
import { Drawer, AppBar } from 'material-ui';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export { BodyContainer }

class BodyContainer extends React.Component<any, any> {
   public constructor(props) {
      super(props);
      this.state = {open: false};
  }
  public onMenuButtonClick(event) {
      console.log('event', event);
      this.setState({open: !this.state.open});
  }
  public onRequestChange(open) {
      this.setState({open});
  }
  public render() {
      let onClick = this.onMenuButtonClick.bind(this);
      return (
      <div>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <AppBar
            onLeftIconButtonTouchTap={onClick}
            title={<SiteLogo removable="false" alt="Fake Testing" logo={this.props.siteLogos} />}
            iconElementRight={<SearchForm removable="false"/>}
        />
        <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={this.onRequestChange.bind(this)}
        >
            <MainMenu />
        </Drawer>
        {this.props.children}
      </div>
    );
  }
}

// TODO: put in a separate file
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
// TODO: put in a separate file
class SearchForm extends React.Component<any, any> {
    public render() {
        return (
            <div className="menu-global__search-form hide-tablet-and-desktop">
                <form action="/search/">
                    <button type="submit" className="menu-global__submit fa fa-search" value=""/>
                    <input name="q" className="menu-global__text-input" type="text" placeholder="Search..."/>
                </form>
            </div>
        );
    }
}
// TODO: put in a separate file
class SectionsList extends React.Component<any, any> {
    public constructor(props) {
        super(props);
        this.state = {sections: []};
    }
    private renderItem(section, index) {
        let url = section.url;
        let target = section.linkout ? '_blank' : '_self';
        if (section.type === 0) {
            url = '/' + url;
        }
        return (
            <li key={section + index}
                className={`main-menu-item sections-list__item sections-list__item--${section.url}`}>
                <a href={url} target={target}>
                    {section.title}
                </a>
            </li>
        );
    }
    public render() {
        return (
            <div>
                <span>I render section from {this.props.sourceSite}</span>
                <ul className="sections-list">
                    <li className="main-menu-item sections-list__item sections-list__item--home">
                        <a href="/">
                            Home
                        </a>
                    </li>
                    {this.state.sections.map(this.renderItem)}
                </ul>
            </div>
        );
    }
};
