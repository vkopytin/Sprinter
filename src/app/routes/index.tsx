import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import * as Pages from '../containers';

// TODO: make this routes load in async using `getComponent` method
export default (
  <Route path="/" component={Pages.BodyContainer}>
    <IndexRoute component={Pages.FrontPage} />
    <Route path="sp/:pageName" component={Pages.StaticPage} />
    <Route path="tag/:tageName" component={Pages.TagPage} />
    <Route path="search/" component={Pages.SearchPage} />
    <Route path="*-:postId.html" component={Pages.PostPage} />
    <Route path=":sectionName" component={Pages.SectionPage} />
  </Route>
);
