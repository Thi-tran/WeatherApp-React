import React from 'react';
import Geosuggest from 'react-geosuggest';
// Create Expense Add / Edit form

class WeatherSearch extends React.Component {
    onSuggestSelect = (suggest) => {
        console.log(suggest.gmaps.name);
        this.props.handleWeatherSearch(suggest.gmaps.name);
    }
    render()  {
        return (
            <div>
                <Geosuggest
                    ref={el=> this._geoSuggest=el}
                    placeholder="Type your location"
                    onSuggestSelect={this.onSuggestSelect}
                />

            </div>
        )
    }
}

export default WeatherSearch;

