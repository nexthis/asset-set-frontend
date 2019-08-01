import React from 'react';
import PropTypes from 'prop-types';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LazyImage from '../LazyImage/LazyImage';

import { Card, CardMedia, CardTitle, ColorBox } from './PreviewCard.style';

const PreviewCard = ({ picture, title, theme, colors }) => {
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

          <Box display="flex">
            {/*eslint-disable */}
            {colors.map((item, index) => (
              <ColorBox boxShadow={2} key={item + index} bgcolor={item} />
            ))}
            {/*eslint-enable */}
          </Box>
        </Box>
      </CardContent>

      <CardActions style={{ backgroundColor: theme }}>
        <IconButton aria-label="Like" size="small">
          <Icon fontSize="small">thumb_up_alt</Icon>
        </IconButton>{' '}
        55
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          style={{ marginLeft: 'auto' }}
        >
          More
        </Button>
      </CardActions>
    </Card>
  );
};

PreviewCard.propTypes = {
  picture: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,

  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.string,
};

PreviewCard.defaultProps = {
  theme: '#f34',
};

export default PreviewCard;
