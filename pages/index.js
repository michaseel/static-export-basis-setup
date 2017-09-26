import { Component } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';

import TeaserPost from '../src/components/molecules/TeaserPost/TeaserPost';

export default class extends Component {
  static async getInitialProps () {
    // fetch list of posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
    const postList = await response.json();

    const response2 = await fetch('http://jsonplaceholder.typicode.com/users/1');
    const pageTitle = await response2.json();
    return { postList, pageTitle };
  }

  render () {
    return (
      <main>
        <Head>
          <title>{this.props.pageTitle.name}</title>
        </Head>

        <h1>{this.props.pageTitle.name}</h1>

        <section>
          {this.props.postList.map(post => <TeaserPost {...post} key={post.id} />)}
        </section>
      </main>
    )
  }
}
