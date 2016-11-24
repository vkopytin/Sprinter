import * as React from 'react';

export { SearchForm }

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
