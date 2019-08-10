import React from 'react';
import PropTypes from 'prop-types';

import SEO from 'components/SEO/SEO';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import LazyImage from 'components/LazyImage/LazyImage';
import BackgroundSpray from 'components/BackgroundSpray/BackgroundSpray';

import { Container, Loading, Card, CardMedia, CardTitle, ColorBox, CardAuthor, CardDescription } from './Page.style';

class Page extends React.PureComponent {
  state = {
    posts: [1],
    loading: false,
  };

  render() {
    const { currentPage, posts, loading } = this.state;

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

    return (
      <>
        <BackgroundSpray ignition={currentPage} />
        <Container>
          <SEO title="page" />
          <Grid container spacing={4} justify="center">
            {posts.map(item => (
              <Grid item xs={6} md={8} lg={9} key={item.id}>
                <Post
                  title={'Proza Libre & Open Sans'}
                  colors={['#ff4']}
                  picture={{ image: item.image, title: 'Proza Libre & Open Sans' }}
                  author={'asset-set'}
                  description={'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker'}
                />
              </Grid>
            ))}
            {loading ? <Loading /> : null}
          </Grid>
        </Container>
      </>
    );
  }
}

export default Page;
