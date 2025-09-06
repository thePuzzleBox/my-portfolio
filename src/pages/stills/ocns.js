import React from 'react';
import Layout from '../../components/Layout2';
import HorizontalGallery from '../../components/HorizontalGallery';
import { Link } from 'gatsby';

// Import all images
import pic4 from '../../assets/images/shots/ox/04.jpg';
import pic5 from '../../assets/images/shots/ox/05.jpg';
import pic6 from '../../assets/images/shots/ox/06.jpg';
import pic7 from '../../assets/images/shots/ox/07.jpg';
import pic8 from '../../assets/images/shots/ox/08.jpg';
import pic9 from '../../assets/images/shots/ox/09.jpg';
import pic10 from '../../assets/images/shots/ox/10.jpg';
import pic11 from '../../assets/images/shots/ox/11.jpg';
import pic12 from '../../assets/images/shots/ox/12.jpg';
import pic13 from '../../assets/images/shots/ox/13.jpg';
import pic14 from '../../assets/images/shots/ox/14.jpg';
import pic15 from '../../assets/images/shots/ox/15.jpg';
import pic16 from '../../assets/images/shots/ox/16.jpg';
import pic17 from '../../assets/images/shots/ox/17.jpg';
import pic18 from '../../assets/images/shots/ox/18.jpg';
import pic19 from '../../assets/images/shots/ox/19.jpg';
import pic20 from '../../assets/images/shots/ox/20.jpg';
import pic21 from '../../assets/images/shots/ox/21.jpg';
import pic22 from '../../assets/images/shots/ox/22.jpg';
import pic23 from '../../assets/images/shots/ox/23.jpg';
import pic24 from '../../assets/images/shots/ox/24.jpg';
import pic25 from '../../assets/images/shots/ox/25.jpg';
import pic26 from '../../assets/images/shots/ox/26.jpg';
import pic27 from '../../assets/images/shots/ox/27.jpg';
import pic28 from '../../assets/images/shots/ox/28.jpg';
import pic29 from '../../assets/images/shots/ox/29.jpg';
import pic30 from '../../assets/images/shots/ox/30.jpg';
import pic31 from '../../assets/images/shots/ox/31.jpg';
import pic32 from '../../assets/images/shots/ox/32.jpg';
import pic33 from '../../assets/images/shots/ox/33.jpg';
import pic34 from '../../assets/images/shots/ox/34.jpg';
import pic35 from '../../assets/images/shots/ox/35.jpg';
import pic36 from '../../assets/images/shots/ox/36.jpg';
import pic37 from '../../assets/images/shots/ox/37.jpg';
import pic38 from '../../assets/images/shots/ox/38.jpg';
import pic39 from '../../assets/images/shots/ox/39.jpg';
import pic40 from '../../assets/images/shots/ox/40.jpg';
import pic41 from '../../assets/images/shots/ox/41.jpg';
import pic42 from '../../assets/images/shots/ox/42.jpg';
import pic43 from '../../assets/images/shots/ox/43.jpg';
import pic44 from '../../assets/images/shots/ox/44.jpg';
import pic45 from '../../assets/images/shots/ox/45.jpg';
import pic46 from '../../assets/images/shots/ox/46.jpg';
import pic47 from '../../assets/images/shots/ox/47.jpg';
import pic48 from '../../assets/images/shots/ox/48.jpg';
import pic49 from '../../assets/images/shots/ox/49.jpg';
import pic50 from '../../assets/images/shots/ox/50.jpg';
import pic51 from '../../assets/images/shots/ox/51.jpg';
import pic52 from '../../assets/images/shots/ox/52.jpg';
import pic53 from '../../assets/images/shots/ox/53.jpg';
import pic54 from '../../assets/images/shots/ox/54.jpg';
import pic55 from '../../assets/images/shots/ox/55.jpg';
import pic56 from '../../assets/images/shots/ox/56.jpg';
import pic57 from '../../assets/images/shots/ox/57.jpg';
import pic58 from '../../assets/images/shots/ox/58.jpg';
import pic59 from '../../assets/images/shots/ox/59.jpg';
import pic60 from '../../assets/images/shots/ox/60.jpg';

import pic01 from '../../assets/images/shots/au/01.jpg';
import pic02 from '../../assets/images/shots/au/02.jpg';
import pic03 from '../../assets/images/shots/au/03.jpg';
import pic04 from '../../assets/images/shots/au/04.jpg';
import pic05 from '../../assets/images/shots/au/05.jpg';
import pic06 from '../../assets/images/shots/au/06.jpg';
import pic07 from '../../assets/images/shots/au/07.jpg';
import pic08 from '../../assets/images/shots/au/08.jpg';
import pic09 from '../../assets/images/shots/au/09.jpg';
import pic010 from '../../assets/images/shots/au/11.jpg';
import pic011 from '../../assets/images/shots/au/12.jpg';

import pic012 from '../../assets/images/shots/au/13.jpg';
import pic013 from '../../assets/images/shots/au/14.jpg';
import pic014 from '../../assets/images/shots/au/15.jpg';
import pic015 from '../../assets/images/shots/au/16.jpg';
import pic016 from '../../assets/images/shots/au/17.jpg';
import pic017 from '../../assets/images/shots/au/22.jpg';
import pic018 from '../../assets/images/shots/au/23.jpg';
import pic019 from '../../assets/images/shots/au/27.jpg';
import pic020 from '../../assets/images/shots/au/28.jpg';
import pic021 from '../../assets/images/shots/au/32.jpg';
import pic022 from '../../assets/images/shots/au/46.jpg';
import pic023 from '../../assets/images/shots/au/33.jpg'

import pic024 from '../../assets/images/shots/au/40.jpg';
import pic025 from '../../assets/images/shots/au/41.jpg';
import pic026 from '../../assets/images/shots/au/42.jpg';
import pic027 from '../../assets/images/shots/au/43.jpg';
import pic028 from '../../assets/images/shots/au/44.jpg';
import pic029 from '../../assets/images/shots/au/45.jpg';
import pic030 from '../../assets/images/shots/au/92.jpg';
import pic031 from '../../assets/images/shots/au/47.jpg';

import pic032 from '../../assets/images/shots/au/49.jpg';
import pic033 from '../../assets/images/shots/au/51.jpg';

import pic034 from '../../assets/images/shots/au/54.jpg';
import pic035 from '../../assets/images/shots/au/55.jpg';
import pic036 from '../../assets/images/shots/au/56.jpg';
import pic037 from '../../assets/images/shots/au/57.jpg';
import pic038 from '../../assets/images/shots/au/58.jpg';
import pic039 from '../../assets/images/shots/au/59.jpg';
import pic040 from '../../assets/images/shots/au/60.jpg';
import pic041 from '../../assets/images/shots/au/61.jpg';
import pic042 from '../../assets/images/shots/au/62.jpg';
import pic043 from '../../assets/images/shots/au/63.jpg';
import pic044 from '../../assets/images/shots/au/64.jpg';
import pic045 from '../../assets/images/shots/au/65.jpg';
import pic046 from '../../assets/images/shots/au/66.jpg';
import pic047 from '../../assets/images/shots/au/67.jpg';

import pic048 from '../../assets/images/shots/au/69.jpg';
import pic049 from '../../assets/images/shots/au/70.jpg';
import pic050 from '../../assets/images/shots/au/71.jpg';
import pic051 from '../../assets/images/shots/au/72.jpg';
import pic052 from '../../assets/images/shots/au/74.jpg';
import pic053 from '../../assets/images/shots/au/76.jpg';
import pic054 from '../../assets/images/shots/au/77.jpg';
import pic055 from '../../assets/images/shots/au/78.jpg';
import pic056 from '../../assets/images/shots/au/79.jpg';
import pic057 from '../../assets/images/shots/au/80.jpg';

import pic058 from '../../assets/images/shots/au/81.jpg';
import pic059 from '../../assets/images/shots/au/82.jpg';
import pic060 from '../../assets/images/shots/au/88.jpg';




const oxImages = [
  pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11,
  pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20,
  pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30,
  pic31, pic32, pic33, pic34, pic35, pic36, pic37, pic38, pic39, pic40,
  pic41, pic42, pic43, pic44, pic45, pic46, pic47, pic48, pic49, pic50,
  pic51, pic52, pic53, pic54, pic55, pic56, pic57, pic58, pic59, pic60
];

const auImages = [
  pic01, pic02, pic03, pic04, pic05, pic06, pic07, pic08, pic09, pic010, pic011,
  pic012, pic013, pic014, pic015, pic016, pic017, pic018, pic019, pic020,
  pic021, pic022, pic023, pic024, pic025, pic026, pic027, pic028, pic029, pic030,
  pic031, pic032, pic033, pic034, pic035, pic036, pic037, pic038, pic039, pic040,
  pic041, pic042, pic043, pic044, pic045, pic046, pic047, pic048, pic049, pic050,
  pic051, pic052, pic053, pic054, pic055, pic056, pic057, pic058, pic059, pic060
];


const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/>

        {/* First Gallery */}
        <HorizontalGallery images={oxImages} />
        <br/><br/><br/><br/><br/>
        {/* Second Gallery */}
        <HorizontalGallery images={auImages} />

      </div>
    </div>
    <br/><br/><br/><br/><br/>
  </Layout>
);

export default IndexPage;
