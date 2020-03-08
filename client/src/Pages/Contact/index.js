import React, { Component, Fragment } from 'react';
import Wrapper from '../../Component/Wrapper';
import './style.css';

class Contact extends Component {

  render() {

    return (
      <Fragment>
        <Wrapper
          title={'Contact'}
        >
          {'contact form'}
        </Wrapper>
      </Fragment>
    );
  }
}

export default Contact;