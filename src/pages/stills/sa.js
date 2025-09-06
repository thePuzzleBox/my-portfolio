import React from 'react';
import Layout from '../../components/Layout2';

import pic1 from '../../assets/images/shots/sa/01.jpg';
import pic2 from '../../assets/images/shots/sa/11.jpg';
import pic3 from '../../assets/images/shots/sa/03.jpg';
import pic4 from '../../assets/images/shots/sa/018.jpg';
import pic5 from '../../assets/images/shots/sa/05.jpg';
import pic6 from '../../assets/images/shots/sa/06.jpg';
import pic7 from '../../assets/images/shots/sa/39.jpg';
import pic8 from '../../assets/images/shots/sa/017.jpg';
import pic9 from '../../assets/images/shots/sa/016.jpg';
import pic10 from '../../assets/images/shots/sa/10.jpg';
import pic11 from '../../assets/images/shots/sa/42.jpg';
import pic12 from '../../assets/images/shots/sa/12.jpg';
import pic13 from '../../assets/images/shots/sa/001.jpg';
import pic14 from '../../assets/images/shots/sa/002.jpg';
import pic15 from '../../assets/images/shots/sa/003.jpg';
import pic16 from '../../assets/images/shots/sa/004.jpg';
import pic17 from '../../assets/images/shots/sa/005.jpg';
import pic18 from '../../assets/images/shots/sa/019.jpg';
import pic19 from '../../assets/images/shots/sa/007.jpg';
import pic20 from '../../assets/images/shots/sa/008.jpg';
import pic21 from '../../assets/images/shots/sa/009.jpg';
import pic22 from '../../assets/images/shots/sa/30.jpg';
import pic23 from '../../assets/images/shots/sa/011.jpg';
import pic24 from '../../assets/images/shots/sa/012.jpg';
import pic25 from '../../assets/images/shots/sa/0011.jpg';
import pic26 from '../../assets/images/shots/sa/013.jpg';
import pic27 from '../../assets/images/shots/sa/014.jpg';
import pic28 from '../../assets/images/shots/sa/006.jpg';
import pic29 from '../../assets/images/shots/sa/28.jpg';
import pic30 from '../../assets/images/shots/sa/08.jpg';
import pic31 from '../../assets/images/shots/sa/35.jpg';
import pic32 from '../../assets/images/shots/sa/43.jpg';
import pic33 from '../../assets/images/shots/sa/020.jpg';
import pic34 from '../../assets/images/shots/sa/04.jpg';
import pic35 from '../../assets/images/shots/sa/24.jpg';
import pic36 from '../../assets/images/shots/sa/25.jpg';
import pic37 from '../../assets/images/shots/sa/44.jpg';
import pic38 from '../../assets/images/shots/sa/27.jpg';
import pic39 from '../../assets/images/shots/sa/45.jpg';
import pic40 from '../../assets/images/shots/sa/29.jpg';
import pic41 from '../../assets/images/shots/sa/02.jpg';
import pic42 from '../../assets/images/shots/sa/31.jpg';
import pic43 from '../../assets/images/shots/sa/32.jpg';
import pic44 from '../../assets/images/shots/sa/41.jpg';
import pic45 from '../../assets/images/shots/sa/33.jpg';
import pic46 from '../../assets/images/shots/sa/23.jpg';
import pic47 from '../../assets/images/shots/sa/36.jpg';
import pic48 from '../../assets/images/shots/sa/37.jpg';
import pic49 from '../../assets/images/shots/sa/07.jpg';
import pic50 from '../../assets/images/shots/sa/26.jpg';
import pic51 from '../../assets/images/shots/sa/40.jpg';

const images = [
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10,
  pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20,
  pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30,
  pic31, pic32, pic33, pic34, pic35, pic36, pic37, pic38, pic39, pic40,
  pic41, pic42, pic43, pic44, pic45, pic46, pic47, pic48, pic49, pic50, pic51
];

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <br /><br /><br /><br /><br /><br /><br /><br />
        
        <section className="tiles" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
  {images.map((img, idx) => (
    <div key={idx} style={{ width: '100%', overflow: 'hidden' }}>
      <img src={img} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
  ))}
</section>

      </div>
    </div>
    <br /><br /><br />
  </Layout>
);

export default IndexPage;
