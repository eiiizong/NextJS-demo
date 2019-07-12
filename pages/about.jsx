import React, { Component } from 'react'
import styles from '../static/style/index.scss'

import HeadComponent from '../components/Head'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div className={styles.about}>
        <HeadComponent title="关于我们"></HeadComponent>
        <div>about</div>
      </div>
    );
  }
}

export default About;
