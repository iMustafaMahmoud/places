import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={(props.coordinates.lat, props.coordinates.lng)}
    >
      {props.isMarkerShown && props.coordinates ? (
        <Marker position={(props.coordinates.lat, props.coordinates.lng)} />
      ) : null}
    </GoogleMap>
  ))
);

export default Map;
