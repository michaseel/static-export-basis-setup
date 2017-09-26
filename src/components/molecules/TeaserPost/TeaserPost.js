import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';

const Headline = styled.h2`
  color: red;
`;

export default props =>
  <article>
    <Headline>{props.title}</Headline>
    <p>{props.body}</p>
    {/* render the URL as /post/:id */}
    <Link href={{ pathname: '/post', query: { id: props.id } }} as={`/post/${props.id}`}>
      <a>Read more...</a>
    </Link>
  </article>
