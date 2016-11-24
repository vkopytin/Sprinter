import * as React from 'react';
import { Route } from 'react-router';
import * as Pages from '../containers';
import {FrontPageRoute} from './frontpage-route';
import {Page} from '../../utils/page';

// TODO: make this routes load in async using `getComponent` method
export default (
  <Route path="/" component={Pages.BodyContainer}>
    <FrontPageRoute />
    <Route path="sp/:pageName" component={Pages.StaticPage} />
    <Route path="tag/:tageName" component={Pages.TagPage} />
    <Route path="search/" component={Pages.SearchPage} />
    <Route path="*-:postId.html" getComponent={Page.makeLoader('templates/postpage.xml', Pages.PostPage)} />
    <Route path=":sectionName" component={Pages.SectionPage} />
  </Route>
);
