import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      loading: false,
      querySize: 150,
      data: [{
        name: 'Health Inspections',
        details: 'LMG - Attributes of routine and complaint driven',
        formats: 'CSV',
        organization: 'City',
      }],
    }
  }

  render() {
    const { loading, query, querySize, data } = this.state;
    return (
      <div className="application">
        <div className="query-details">
          
          <div className={`query-text ui left icon input ${loading ? 'loading': ''}`}>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={e => this.setState({ query: e.target.value })} />
            <i className="search icon"></i>
          </div>
          
          <div className='query-size ui left icon input'>
            <input
              type="number"
              placeholder="# of Results..."
              value={querySize}
              onChange={e => this.setState({ querySize: e.target.value })} />
            <i className="sticky note icon"></i>
          </div>

          <div className="query-go">
            <div className="ui fluid blue button" tabIndex="0">GO</div>
          </div>

        </div>

        <div className="app-body">
          <div className="ui inverted segment">
            <div className="ui inverted relaxed divided list">
              {data.map((ds) => (
                <div className="item">
                  <i className="large bars middle aligned icon"></i>
                  <div className="content">
                    <a className="header">{ds.name}</a>
                    <div className="header ds-org">{ds.organization}</div>
                    <div className="description">{ds.details}</div>
                    <div className="description ds-formats">{ds.formats}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);
