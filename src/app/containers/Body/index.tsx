const appConfig = require('../../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import { MainMenu, Header, MenuButton } from '../../components';

export { BodyContainer }

class BodyContainer extends React.Component<any, any> {
   public constructor(props) {
      super(props);
      this.state = {menuOpened: false};
  }
  protected onMenuButtonClick(event) {
      console.log('event', event);
      this.setState({menuOpened: !this.state.menuOpened});
  }
  public render() {
      const navStyles = (this.state.menuOpened ? {zIndex: 4, transform: 'translate(0,0)'} : {});
      return (
      <div>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <MenuButton onClick={this.onMenuButtonClick.bind(this)} />
        <nav className="menu-global" style={navStyles}>
            <div className="main-menu-wrapper">
                <MainMenu />
            </div>
        </nav>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
