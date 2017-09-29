import { Component } from 'react';
import Head from 'next/head';

import { translate } from 'react-i18next'
import i18n from '../i18n'

import TeaserPost from '../src/components/molecules/TeaserPost/TeaserPost';

class Rezept extends Component {
  static async getInitialProps ({req, query}) {
    if (typeof req !== undefined && !process.browser) return i18n.getInitialProps(req, ['home', 'common']);
    else return {}
  }

  render () {
    return (
      <main>
        <Head>
          <title>{this.props.t('common:rezept')}</title>
        </Head>

        <h1>{this.props.t('common:rezept')}</h1>
        <h2>{this.props.t('common:integrates_react-i18next')}</h2>

        <TeaserPost title={"hello"} />

        <a href={"/de/rezept"}>Deutsch</a><br />
        <a href={"/fr/frezept"}>Französisch</a><br />
        <a href={"/it/italrezept"}>Italienisch</a><br />
      </main>
    )
  }
}

export default translate(['home', 'common'], { i18n, wait: process.browser })(Rezept)
