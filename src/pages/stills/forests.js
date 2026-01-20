{/* import React from 'react';
import Layout from '../../components/Layout2';
import HorizontalGallery from '../../components/HorizontalGallery';

// Import all images
import pic1 from '../../assets/images/shots/plant/01.jpg';
import pic2 from '../../assets/images/shots/plant/02.jpg';
import pic3 from '../../assets/images/shots/plant/03.jpg';
import pic4 from '../../assets/images/shots/plant/04.jpg';
import pic5 from '../../assets/images/shots/plant/05.jpg';
import pic6 from '../../assets/images/shots/plant/06.jpg';
import pic7 from '../../assets/images/shots/plant/07.jpg';
import pic8 from '../../assets/images/shots/plant/08.jpg';
import pic9 from '../../assets/images/shots/plant/09.jpg';
import pic10 from '../../assets/images/shots/plant/010.jpg';
import pic11 from '../../assets/images/shots/plant/011.jpg';
import pic12 from '../../assets/images/shots/plant/012.jpg';
import pic13 from '../../assets/images/shots/plant/013.jpg';
import pic14 from '../../assets/images/shots/plant/014.jpg';
import pic15 from '../../assets/images/shots/plant/015.jpg';
import pic16 from '../../assets/images/shots/plant/016.jpg';
import pic17 from '../../assets/images/shots/plant/017.jpg';
import pic18 from '../../assets/images/shots/plant/018.jpg';
import pic19 from '../../assets/images/shots/plant/019.jpg';
import pic20 from '../../assets/images/shots/plant/020.jpg';
import pic21 from '../../assets/images/shots/plant/021.jpg';
import pic22 from '../../assets/images/shots/plant/022.jpg';
import pic23 from '../../assets/images/shots/plant/023.jpg';
import pic24 from '../../assets/images/shots/plant/024.jpg';
import pic25 from '../../assets/images/shots/plant/025.jpg';
import pic26 from '../../assets/images/shots/plant/026.jpg';
import pic27 from '../../assets/images/shots/plant/027.jpg';
import pic28 from '../../assets/images/shots/plant/028.jpg';
import pic29 from '../../assets/images/shots/plant/029.jpg';
import pic30 from '../../assets/images/shots/plant/030.jpg';
import pic31 from '../../assets/images/shots/plant/031.jpg';
import pic32 from '../../assets/images/shots/plant/032.jpg';
import pic33 from '../../assets/images/shots/plant/033.jpg';
import pic34 from '../../assets/images/shots/plant/034.jpg';
import pic35 from '../../assets/images/shots/plant/035.jpg';
import pic36 from '../../assets/images/shots/plant/036.jpg';
//import pic37 from '../../assets/images/shots/plant/037.jpg';
//import pic38 from '../../assets/images/shots/plant/038.jpg';
//import pic39 from '../../assets/images/shots/plant/039.jpg';
import pic40 from '../../assets/images/shots/plant/040.jpg';
import pic41 from '../../assets/images/shots/plant/041.jpg';
import pic42 from '../../assets/images/shots/plant/042.jpg';
import pic43 from '../../assets/images/shots/plant/043.jpg';
import pic44 from '../../assets/images/shots/plant/044.jpg';
import pic45 from '../../assets/images/shots/plant/045.jpg';
//import pic46 from '../../assets/images/shots/plant/046.jpg';
//import pic47 from '../../assets/images/shots/plant/047.jpg';
//import pic48 from '../../assets/images/shots/plant/048.jpg';
import pic49 from '../../assets/images/shots/plant/049.jpg';
import pic50 from '../../assets/images/shots/plant/050.jpg';
import pic51 from '../../assets/images/shots/plant/051.jpg';
import pic52 from '../../assets/images/shots/plant/052.jpg';
import pic53 from '../../assets/images/shots/plant/053.jpg';
import pic54 from '../../assets/images/shots/plant/054.jpg';
import pic55 from '../../assets/images/shots/plant/055.jpg';
import pic56 from '../../assets/images/shots/plant/056.jpg';
import pic57 from '../../assets/images/shots/plant/057.jpg';
import pic58 from '../../assets/images/shots/plant/058.jpg';
import pic59 from '../../assets/images/shots/plant/059.jpg';
import pic60 from '../../assets/images/shots/plant/060.jpg';
import pic61 from '../../assets/images/shots/plant/061.jpg';
import pic62 from '../../assets/images/shots/plant/062.jpg';
import pic63 from '../../assets/images/shots/plant/063.jpg';
import pic64 from '../../assets/images/shots/plant/064.jpg';
import pic65 from '../../assets/images/shots/plant/065.jpg';
import pic66 from '../../assets/images/shots/plant/066.jpg';
import pic67 from '../../assets/images/shots/plant/067.jpg';
import pic68 from '../../assets/images/shots/plant/068.jpg';
import pic69 from '../../assets/images/shots/plant/069.jpg';
import pic70 from '../../assets/images/shots/plant/070.jpg';
import pic71 from '../../assets/images/shots/plant/071.jpg';
import pic72 from '../../assets/images/shots/plant/072.jpg';
import pic73 from '../../assets/images/shots/plant/073.jpg';
import pic74 from '../../assets/images/shots/plant/074.jpg';
import pic75 from '../../assets/images/shots/plant/075.jpg';
import pic76 from '../../assets/images/shots/plant/076.jpg';
import pic77 from '../../assets/images/shots/plant/077.jpg';
import pic78 from '../../assets/images/shots/plant/078.jpg';
import pic79 from '../../assets/images/shots/plant/079.jpg';
import pic80 from '../../assets/images/shots/plant/080.jpg';
import pic81 from '../../assets/images/shots/plant/081.jpg';
import pic82 from '../../assets/images/shots/plant/082.jpg';
import pic83 from '../../assets/images/shots/plant/083.jpg';
import pic84 from '../../assets/images/shots/plant/084.jpg';


// THIS IS A HORIZONTAL SCROLL LAYOUT, GREAT BUT STILL NEEDS VISUAL WORK

const gallery1 = [ 
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10,
  pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20,
  pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30,
  pic31, pic32, pic33, pic34, pic35, pic36, pic37, pic38, pic39, pic40,
  pic41, pic42, pic43, pic44, pic45, pic46, pic47, pic48, pic49, pic50,
  pic51, pic52, pic53, pic54
];

const gallery2 = [
  pic55, pic56, pic57, pic58, pic59, pic60, pic61, pic62, pic63, pic64,
  pic65, pic66, pic67, pic68, pic69, pic70, pic71, pic72
];

const gallery3 = [
  pic73, pic74, pic75, pic76, pic77, pic78, pic79, pic80, pic81, pic82,
  pic83, pic84
];

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/>

        <HorizontalGallery images={gallery1} />
        <br/><br/><br/><br/><br/>
        <HorizontalGallery images={gallery2} />
        <br/><br/><br/><br/><br/>
        <HorizontalGallery images={gallery3} />
      </div>
    </div>
    <br/><br/><br/><br/><br/>
  </Layout>
);

export default IndexPage;
*/}