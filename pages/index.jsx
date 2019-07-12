import React, { Component } from 'react'
import Link from 'next/link'
import HeadComponent from '../components/Head'

import styles from '../static/style/index.scss'
// 不使用 css module
// import '../static/style/index.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div className={styles.main}>
        <HeadComponent title="首页"></HeadComponent>
        <nav>
          <ul>
            <li>
              <Link prefetch href="/about"><a>About</a></Link>
            </li>
            <li>
              <Link prefetch href="/"><a>Home</a></Link>
            </li>
          </ul>
        </nav>
        <div>welcome to next</div>
        <img src="static/img/react.png" />
      </div>
    );
  }
}

export default Home