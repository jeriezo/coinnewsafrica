import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <footer>
            <p className="pull-center">
              {' '}
              <span style={{ color: 'red' }}>Disclaimer:</span> All informaion
              including our ratings are provided for information purposes alone
              Coinnewsafrica.com does not provide or give investment advice of
              any sort. please check our{' '}
              <a href="/TandC">Terms of service and private policy</a> for more
              information
            </p>
            <div className="span pull-center">
              <a href="http://t.me/coinnewsafricadotcom">
                <i className="fa fa-telegram" aria-hidden="true" />
              </a>
              <a href="https://mobile.twitter.com/coinnewsafica">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/coinnewsafrica_/">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href="https://m.facebook.com/Coinnewsafrica_com-555923951420962/?ref=bookmarks">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </div>
            <p className="pull-center">
              {' '}
              Stay informed and connected by following our social media handles{' '}
            </p>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
