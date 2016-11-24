import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';

interface IMenuItem {
    id: string;
    url: string;
    title: string;
    loginRequired: boolean;
    type: number;
}

export class MainMenu extends React.Component<any, any> {
    public constructor(props) {
        super(props);
        // TODO: get this data from store, should be store.mainMenu or so
        const MainMenu: IMenuItem[] = [
            {id: 'overview', url: '/core/dashboard/overview/', title: 'Dashboard', loginRequired: true, type: 0},
            {id: 'runner_editor', url: '/core/dashboard/runner', title: 'Layout & Design',
                loginRequired: true, type: 0},
            {id: 'account', url: '/core/dashboard/sites/', title: 'Account', loginRequired: true, type: 0},
            {id: 'sections', url: '/core/dashboard/sections/', title: 'Sections', loginRequired: true, type: 0},
            {id: 'sources', url: '/core/dashboard/content_feeds/feeds', title: 'Content Feeds',
                loginRequired: true, type: 0},
            {id: 'login', url: '/login', title: 'Log in', loginRequired: false, type: 0},
            {id: 'logout', url: '/core/users/logout', title: 'Log out', loginRequired: true, type: 0},
        ];
        this.state = {leftNav: MainMenu};
    }
    public render() {
        return (
            <ul id="main-menu" className="main-menu">
                {this.state.leftNav.map(this.renderItem)}
            </ul>
        );
    }
    private renderItem(item, index) {
        return (
            // <li key={`leftNav-${index}`} className={`main-menu-item main-menu-item--${item.id}`}>
            //     <div>
            //         <a className="link"
            //            href={`/core/dashboard/${item.id}`}
            //            title="Dashboard">
            //             <span className="item-link">{item.title}</span>
            //         </a>
            //     </div>
            // </li>
            <MenuItem key={item.id} href={`/core/dashboard/${item.id}`} title={item.title}>{item.title}</MenuItem>
        );
    }
}
