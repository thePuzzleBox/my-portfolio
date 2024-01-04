import React from 'react';

import Layout from '../components/Layout2';

import pic1 from '../assets/images/shots/01.jpg';
import pic2 from '../assets/images/shots/02.jpg';
import pic3 from '../assets/images/shots/03.jpg';
import pic4 from '../assets/images/shots/04.jpg';
import pic5 from '../assets/images/shots/05.jpg';
import pic6 from '../assets/images/shots/06.jpg';
import pic7 from '../assets/images/shots/07.jpg';
import pic8 from '../assets/images/shots/08.jpg';
import pic9 from '../assets/images/shots/09.jpg';
import pic10 from '../assets/images/shots/10.jpg';
import pic11 from '../assets/images/shots/11.jpg';
import pic12 from '../assets/images/shots/12.jpg';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
          <br/><br/><br/><br/><br/><br/>
        <section className="tiles">
          <article>
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">
              <h2>Magna</h2>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">
              <h2>Lorem</h2>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">
              <h2>Feugiat</h2>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">
              <h2>Tempus</h2>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">    
              <h2>Aliquam</h2>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <span className="image">
              <img src={pic6} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">
              <h2>Veroeros</h2>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <span className="image">
              <img src={pic7} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">
              <h2>Ipsum</h2>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <span className="image">
              <img src={pic8} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">
              <h2>Dolor</h2>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <span className="image">
              <img src={pic9} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">
              <h2>Nullam</h2>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <span className="image">
              <img src={pic10} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">
              <h2>Ultricies</h2>    
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <span className="image">
              <img src={pic11} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">
              <h2>Dictum</h2>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article>
            <span className="image">
              <img src={pic12} alt="" />
            </span>
            <Link to="/Generic">
              <div className="content">
              <h2>Pretium</h2>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
        </section>
      </div>
    </div>
    <br/><br/><br/>
  </Layout>
);

export default IndexPage;