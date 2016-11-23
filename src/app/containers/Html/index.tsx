// import { IStore } from '../../redux/IStore';
import * as React from 'react';
import * as Helmet from 'react-helmet';

interface IHtmlProps {
    manifest?: Object;
    markup?: string;
//   store?: Redux.Store<IStore>;
    store?: Redux.Store<any>;
    bodyClasses?: string;
    context?: Object;
}

class Html extends React.Component<IHtmlProps, {}> {
    private resolve(files) {
        return files.map((src) => {
            if (!this.props.manifest[src]) {
                return;
            }
            return '/public/' + this.props.manifest[src];
        }).filter((file) => file !== undefined);
    }

  public render() {
    const head = Helmet.rewind();
    const { markup, store } = this.props;

    const styles = this.resolve(['vendor.css', 'app.css']);
    const renderStyles = styles.map((src, i) =>
      <link key={i} rel="stylesheet" type="text/css" href={src} />
    );

    const scripts = this.resolve(['vendor.js', 'app.js']);
    const renderScripts = scripts.map((src, i) =>
      <script src={src} key={i} />
    );

    // tslint:disable-next-line:max-line-length
    const initialState = (<script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__=${JSON.stringify(store.getState())};` }} charSet="UTF-8" />);

    return (
      <html>
        {/* { dynamic_content.header|safe } */}
        {/*{% if is_custom_domain and raw_site_info.is_roar %}*/}
        {/*{% if subpage_url  %}*/}
        {/*<link rel="alternate" type="application/rss+xml"*/}
            {/*title="{{raw_site_info.title}}" href="/feeds/{{subpage_url}}.rss" />*/}
        {/*{% else %}*/}
        {/*<link rel="alternate" type="application/rss+xml" title="{{raw_site_info.title}}" href="/feeds/feed.rss" />*/}
        {/*{% endif %}*/}
        {/*{% endif %}*/}
        {/*{% if is_custom_domain and raw_site_info.is_roar_subsite %}*/}
        {/*<link rel="alternate"*/}
            {/*type="application/rss+xml" title="{{raw_site_info.title}}"*/}
            {/*href="/feeds/community/{{raw_site_info.name}}.rss" />*/}
        {/*{% endif %}*/}
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          {renderStyles}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://static.rbl.ms/static/css-build/roar/runner/critical.css" />
        </head>
        <body {...this.props.bodyClasses}>
          <main id="app" dangerouslySetInnerHTML={{ __html: markup }} />
          {initialState}
          {renderScripts}
            {/* <script>let Engine = 'Runner Account engine settings'</script> */}
            {/* <script>let Settings = 'Settings: user/site/etc'</script> */}
        </body>
        {/* <script>let GA = 'set GA tracker for RM and a Clients tracket'</script> */}
        {/* <FacebookSDK /> */}
      </html>
    );
  }
}

export { Html }

let ThisIsRMPeacesOfTemplate = `<head>
    {/* {% for meta_tag in meta_tags %} */}
    {/*<meta {% for key, value in meta_tag.iteritems()%}{{ key }}="{{ value }}" {% endfor %}>*/}
    {/*{% endfor %}*/}

   {/* {% if raw_site_info and raw_site_info.head_custom_meta_tags %}*/}
   {/* {{ raw_site_info.head_custom_meta_tags|safe }}*/}
   {/* {% endif %}*/}

    {/* {% if is_mobile %} */}
    {/*    <meta name="format-detection" content="telephone=no"> */}
    {/* {% endif %} */}

    {/* block fbcodes %}{% endblock */}
    {% block head_meta %}
        {% include "community/meta_tags.html" %}
    {% endblock head_meta %}

    {/* block styles %}
    {% block styles %}
        {{ super() }}

        {% if debug %}
            {# {% css_include critical_styles %} #}
        {% else %}
            <!-- styles defined using css_processor tag in skeleton -->
        {% endif %}

        {% if lazy_loading %}
            {% lazy_css_include non_critical_styles %}
        {% else %}
            {% css_include non_critical_styles %}
        {% endif %}
    {% endblock styles %}
    {% endblock */}
    
    {/* block head_extra %}{% endblock */}
</head>

//DONE: <body {%block body_attributes %}{% endblock %} 
    {% if age_gate and not is_user_logged_in%}style="display: none;"{%endif%}>
    {/*% if messages %}
    <ul class="messages">
    {% for message in messages %}
        <li{% if message.tags %} class="{{ message.tags }}"{% endif %}>
        {% if 'safe' in message.tags %}{{ message|safe }}{% else %}{{ message }}{% endif %}
        </li>
    {% endfor %}
    </ul> 
    {% endif %}
    */}
    
    {/* if typekit_id %}
    <script type="text/javascript" src="//use.typekit.net/{{typekit_id}}.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    {% endif */}

    {% block google_analytics %}
    {% block extra_stats %}{% endblock %}
    {% block extra_base_js %}
  
    <!-- Served from: {{ hostname }} -->

</body>
</html>`;
console.log(ThisIsRMPeacesOfTemplate);
