import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

class HeadComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    keywords: PropTypes.string,
    author: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    const { title = 'Next.js App', description = '描述', keywords = '关键词', author = '作者' } = this.props
    return (
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0,shrink-to-fit=no" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <link rel="icon" href="/static/favicon.ico"></link>
        <title>{title}</title>
      </Head>
    )
  }
}

export default HeadComponent
