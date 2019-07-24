import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import { Wrapper, Loader, Box } from './LazyImage.style';

const LazyImageAnimation = () => (
  <Wrapper>
    <Loader>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Loader>
  </Wrapper>
);

const LazyImage = props => (
  <LazyLoad
    {...props}
    placeholder={<LazyImageAnimation />}
    offset={[-200, 0]}
    debounce={600}
  >
    {/*eslint-disable */}
    {props.children}
    {/*eslint-enable  */}
  </LazyLoad>
);

LazyImage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LazyImage;
