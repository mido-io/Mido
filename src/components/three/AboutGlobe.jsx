import Globe from 'react-globe.gl';

import { profile } from '../../constants/profile.js';

const AboutGlobe = () => (
  <Globe
    height={326}
    width={326}
    backgroundColor="rgba(0, 0, 0, 0)"
    backgroundImageOpacity={0.5}
    showAtmosphere
    showGraticules
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    labelsData={[
      {
        lat: profile.location.lat,
        lng: profile.location.lng,
        text: profile.location.label,
        color: 'white',
        size: 15,
      },
    ]}
  />
);

export default AboutGlobe;
