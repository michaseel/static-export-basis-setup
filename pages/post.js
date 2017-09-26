import { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import LightBulp from '../src/components/molecules/Lightbulb/Lightbulb'

export default class extends Component {
  static async getInitialProps ({ query }) {
    // fetch single post detail
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    const post = await response.json();
    return { ...post };
  }

  render () {
    return (
      <main>
        <Head>
          <title>{this.props.title}</title>
        </Head>

        <h1>{this.props.title}</h1>
        <LightBulp />

        <p>{this.props.body}</p>

        <Link href='/'>
          <a>Go back to home</a>
        </Link>
      </main>
    )
  }
}
