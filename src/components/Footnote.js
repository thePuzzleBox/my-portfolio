import React, { Component } from 'react';

export default class Footnote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };

    this.footnoteRef = React.createRef();
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.setState({ isVisible: true });
            this.observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (this.footnoteRef.current) {
      this.observer.observe(this.footnoteRef.current);
    }
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    const { isVisible } = this.state;

    return (
      <section
        id="footnote"
        className={`footnote-section ${isVisible ? 'is-visible' : ''}`}
        ref={this.footnoteRef}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <br/><br/><br/>
              <div className="footnote-text">
                <i>
                  <h4 className="text-white mb-5 text-center">
                    I promise you,
                  </h4>
                  <h4 className="text-white mb-5 text-center">
                    You'll want so much more than to see the world.
                    <br/><br/>
                  </h4>
                </i>
              </div>
            </div>
          </div>

          {/*<div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">Subscribe to receive updates!</h2>

              <form className="form-inline d-flex">
                <input
                  type="email"
                  className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  id="inputEmail"
                  placeholder="Enter email address..."
                />
                <button type="submit" className="btn btn-primary mx-auto">
                  Subscribe
                </button>
              </form>
            </div>
          </div>*/}
        </div>
      </section>
    );
  }
}