import React from 'react';

import SEO from 'components/SEO/SEO';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/PreviewCard/PreviewCard';
import BackgroundSpray from '../../components/BackgroundSpray/BackgroundSpray';

import { Container } from './HomePage.style';

const HomePage = () => (
  <>
    <BackgroundSpray />
    <Container>
      <SEO title="home" />
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/800/900', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/500/900', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/800/500', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/800/900', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/800/900', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/800/900', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/1000/900', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/830/900', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/810/900', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/840/900', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/850/900', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="test"
            colors={['#ff4']}
            picture={{ image: 'https://picsum.photos/950/900', title: 'test' }}
          >
            asd
          </Card>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default HomePage;
