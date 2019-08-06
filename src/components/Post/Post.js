import React from 'react';
import PropTypes from 'prop-types';

import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import LazyImage from '../LazyImage/LazyImage';

import { Card, CardMedia, CardTitle, ColorBox, CardAuthor, CardDescription } from './Post.style';

const Post = ({ picture, title, colors, author, description }) => {
  return (
    <Card>
      <CardActionArea>
        <LazyImage once height={281}>
          <CardMedia image={picture.image} title={picture.title} />
        </LazyImage>
      </CardActionArea>

      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <CardTitle>{title}</CardTitle>

          <Box display="flex" >
            {/*eslint-disable */}
            {colors.map((item, index) => (
              <ColorBox boxShadow={2} key={item + index} bgcolor={item} />
            ))}
            {/*eslint-enable */}
          </Box>
        </Box>

        <Box>
          <CardAuthor>{author}</CardAuthor>
        </Box>
      
        <Box>
          <CardDescription>{description}</CardDescription>
        </Box>
      </CardContent>
    </Card>
  );
};

Post.propTypes = {
  picture: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
   author: PropTypes.string,
  description: PropTypes.string,
  }).isRequired,

  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Post;
