import React from 'react';

import SEO from 'components/SEO/SEO';
import Grid from '@material-ui/core/Grid';
import Card from 'components/Post/Post';
import BackgroundSpray from 'components/BackgroundSpray/BackgroundSpray';

import { Container, Loading } from './Page.style';

class Page extends React.PureComponent {
  state = {
    posts: [1],
    loading: false,
  };

  render() {
    const { currentPage, posts, loading } = this.state;

    return (
      <>
        <BackgroundSpray ignition={currentPage} />
        <Container>
          <SEO title="page" />
          <Grid container spacing={4} justify="center">
            {posts.map(item => (
              <Grid item xs={6} md={8} lg={9} key={item.id}>
                <Card
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
