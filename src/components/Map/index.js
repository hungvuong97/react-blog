import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, {Component} from 'react';

class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 },
            { latitude: 20.97136, longitude: -122.021071 },
          ]
        }
    }
     mapStyles = {
        width: '100%',
        height: '100%',
      };

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <Map
                google={this.props.google}ong
                zoom={8}
                style={this.mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCMErHOCg5cm1ShzsRjy8furiRGGWw8z9E'
})(MapContainer);