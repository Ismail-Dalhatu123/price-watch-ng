import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import AppContext from '../contexts/AppContext';
import getDarkClass from '../utils/getDarkClass';
import Loader from './Loader';
 
class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
      this.setState({ address });
  };
 
    handleSelect = address => {
      this.props.setAddress(address)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.setLatLng(latLng))
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
        <AppContext.Consumer>
            {context => (<PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={`form_input light-white-bg ${getDarkClass('dark-accent')}`} style={{height: 'auto', minHeight: 50}}>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input input ',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <Loader loading />}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: context.theme === 'light' ? '#475f7c': '#005a76', padding: 15, cursor: 'pointer', color: '#fff' }
                  : { backgroundColor: 'transparent',padding: 15, cursor: 'pointer' };
                return (
                    <div
                    key={Math.random().toString()}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span style={{padding: 20, marginTop: 10}}>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>)}
      </AppContext.Consumer>
    );
  }
}

export default Places