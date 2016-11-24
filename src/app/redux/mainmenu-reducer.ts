interface IMenuItem {
    id: string;
    url: string;
    title: string;
    loginRequired: boolean;
    type: number;
}

const initialState = {
    leftNav: [
        {id: 'overview', url: '/core/dashboard/overview/', title: 'Dashboard', loginRequired: true, type: 0},
        {id: 'runner_editor', url: '/core/dashboard/runner', title: 'Layout & Design',
            loginRequired: true, type: 0},
        {id: 'account', url: '/core/dashboard/sites/', title: 'Account', loginRequired: true, type: 0},
        {id: 'sections', url: '/core/dashboard/sections/', title: 'Sections', loginRequired: true, type: 0},
        {id: 'sources', url: '/core/dashboard/content_feeds/feeds', title: 'Content Feeds',
            loginRequired: true, type: 0},
        {id: 'login', url: '/login', title: 'Log in', loginRequired: false, type: 0},
        {id: 'logout', url: '/core/users/logout', title: 'Log out', loginRequired: true, type: 0},
    ],
};

const mainMenuReducer = (previousState = initialState, action) => {

  return previousState;
};

export { mainMenuReducer }
