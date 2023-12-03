import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

export function UsStatesMap() {
  return (
    <MapContainer
      center={[39.1141, -94.6275]}
      zoom={4}
    >
      <TileLayer
        attribution={
          "&copy; <a href={'http://www.openstreetmap.org/copyright'}>{'OpenStreetMap'}</a>"
        }
        url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
      />
    </MapContainer>
  );
}
