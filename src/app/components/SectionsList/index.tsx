import * as React from 'react';

export { SectionsList }

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
