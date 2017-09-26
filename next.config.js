const fetch = require('isomorphic-fetch');

module.exports = {
    async exportPathMap () {
        // we fetch our list of posts, this allow us to dynamically generate the exported pages
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
        const postList = await response.json();

        // tranform the list of posts into a map of pages with the pathname `/post/:id`
        const frenchpages = postList.reduce(
            (pages, post) =>
                Object.assign({}, pages, {
                    [`fr/löres/${post.title}`]: {
                        page: '/post',
                        query: { id: post.id }
                    }
                }),
            {},
        );

      const germanpages = postList.reduce(
        (pages, post) =>
          Object.assign({}, pages, {
            [`de/rezepte/${post.title}`]: {
              page: '/post',
              query: { id: post.id }
            }
          }),
        {},
      );

        // combine the map of post pages with the home
        return Object.assign({}, frenchpages, germanpages, {
            '/': { page: '/' }
        })
    }
};
