const appConfig = require('../../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import { MainMenu, SearchForm, SiteLogo } from '../../components';
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
