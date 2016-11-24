import * as React from 'react';
import { IndexRoute } from 'react-router';
import * as Pages from '../containers';
import {Page} from '../../utils/page';

// TODO: make this routes load in async using `getComponent` method
class FrontPageRoute extends React.Component<any, any> {
    private loadComponent (location, cb) {
        Page.load('templates/frontpage.xml', (children) => {
            cb(null, (props: any) => <Pages.FrontPage {...props}>{children}</Pages.FrontPage>);
        });
    }

    public render () {
        return (<IndexRoute {...this.props} getComponent={this.loadComponent} />);
    }
}

export {FrontPageRoute}
