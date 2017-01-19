import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import { translate } from 'app/Translator';
import { detransliterate } from 'app/utils/ParsersAndFormatters';

class Topics extends React.Component {
    static propTypes = {
        categories: React.PropTypes.object.isRequired,
        order: React.PropTypes.string,
        current: React.PropTypes.string,
        className: React.PropTypes.string,
        compact: React.PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {expanded: false, search: ''};
    }

    shouldComponentUpdate(nextProps, nextState) {
        const res = this.props.categories !== nextProps.categories ||
            this.props.current !== nextProps.current ||
            this.props.order !== nextProps.order || this.state !== nextState;
        return res;
    }

    onChangeSearch = e => {
        this.setState({search: e.target.value})
    }

    expand = (e) => {
        e.preventDefault();
        this.setState({expanded: true});
        return false;
    };

    render() {
        const {
            props: {order, current, compact, className},
            state: {expanded, search},
            onChangeSearch, expand
        } = this;

        let categories = this.props.categories.get('trending');

        if (!(expanded || search) || compact) categories = categories.take(50);

        const cn = 'Topics' + (className ? ` ${className}` : '');
        const currentValue = `/${order}/${current}`;

        if (compact) {
            return <select className={cn} onChange={(e) => browserHistory.push(e.target.value)} value={currentValue}>
                <option key={'*'} value={'/' + order}>{translate('topics')}...</option>
                {categories.map(cat => {
                    const link = order ? `/${order}/${cat}` : `/${cat}`;
                    return <option key={cat} value={link}>{detransliterate(cat)}</option>
                })}
            </select>;
        }

        if (search) categories = categories.filter(val => val.indexOf(search.toLowerCase()) !== -1);
        categories = categories.map(cat => {
            const link = order ? `/${order}/${cat}` : `/hot/${cat}`;
            return (<li key={cat}>
                        <Link to={link} activeClassName="active">{detransliterate(cat)}</Link>
                    </li>);
        });

        return (
            <ul className={cn}>
                <li className="Topics__title lead" key={'*'}>{translate("tags_and_topics")}</li>
                <li className="Topics__filter"><input type="text" placeholder={translate('filter')} value={detransliterate(search)} onChange={onChangeSearch} /></li>
               {categories}
               {!expanded && !search && <li className="show-more">
                   {/*<a href="#" onClick={expand}>Show more topics..</a>*/}
                   <Link to={`/tags.html/${order}`}>{translate("show_more_topics")}..</Link>
               </li>}
            </ul>
        );
    }
}

export default  connect(state => ({
                            categories: state.global.get('category_idx')
                        }))(Topics);
