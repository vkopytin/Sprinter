import * as React from 'react';
import {Block, Blocks} from '../../components/';

export { Header, SectionsList, SearchForm }

class Header extends React.Component<any, any> {
  public showMenu() {
      alert('show menu');
  }
  public render() {
    // TODO: make sure we need all these data-... stuff
    return (
      <Blocks data-rm-device-mode="desktop">
            <Block name="Top Bar" removable="false">
                {/* TODO: ask Paul and juan why it's there all the time but we show it only on front */}
                {/* <sharebar removable="false"/> */}
                <TopBar
                    format="simple"
                    siteLogo={<SiteLogo removable="false" alt="Fake Testing" logo={this.props.siteLogos} />}
                    sectionsList={<SectionsList />}
                    searchForm={<SearchForm removable="false"/>}
                />
            </Block>
        </Blocks>

    );
  }
}
// TODO: put in a separate file
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
