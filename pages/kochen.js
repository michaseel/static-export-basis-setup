import { Component } from 'react';
import Head from 'next/head';

import { translate } from 'react-i18next'
import i18n from '../i18n'

import TeaserPost from '../src/components/molecules/TeaserPost/TeaserPost';

class Kochen extends Component {
  static async getInitialProps ({req}) {
    if (typeof req !== undefined && !process.browser) return i18n.getInitialProps(req, ['home', 'common']);
    else return {}
  }

  render () {
    return (
      <main>
        <Head>
          <title>{this.props.t('common:kochen')}</title>
        </Head>

        <h1>{this.props.t('common:kochen')}</h1>
        <h2>{this.props.t('common:integrates_react-i18next')}</h2>

        <TeaserPost title={"hello"} />

        <a href={"/de/kochen"}>Deutsch</a><br />
        <a href={"/fr/cuisine"}>Französisch</a><br />
        <a href={"/it/itkochen"}>Italienisch</a><br />
      </main>
    )
  }
}

export default translate(['home', 'common'], { i18n, wait: process.browser })(Kochen)
