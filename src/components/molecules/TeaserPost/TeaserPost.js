import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';
import { translate } from 'react-i18next'

const Headline = styled.h2`
  color: red;
`;

const TeaserPost = ({ title, body, t}) => (
  <article>
    <Headline>{title}</Headline>
    <p>{body}</p>

    <Link href={{ pathname: '/index' }} as={`/${t('locale')}/`}>
      <a>{t('homepage')}</a>
    </Link>
    <br />

    <Link href={{ pathname: '/rezept' }} as={`/${t('locale')}/${t('rezept')}/`}>
      <a>{t('rezept')}</a>
    </Link>
    <br />
    <Link href={{ pathname: '/kochen' }} as={`/${t('locale')}/${t('kochen')}/`}>
      <a>{t('kochen')}</a>
    </Link>
    <br /><br />
  </article>
);

export default translate('common')(TeaserPost)
