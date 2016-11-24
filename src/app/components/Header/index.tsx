import * as React from 'react';
import { Block, Blocks } from '../../components/';
import { TopBar, SearchForm, SiteLogo, SectionsList } from '../../components';

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
