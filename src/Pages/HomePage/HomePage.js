import React from 'react';
import axios from 'axios';
import throttle from 'utils/Throttle';

import SEO from 'components/SEO/SEO';
import Grid from '@material-ui/core/Grid';
import Card from 'components/PreviewCard/PreviewCard';
import BackgroundSpray from 'components/BackgroundSpray/BackgroundSpray';

import { Container, Loading } from './HomePage.style';

class HomePage extends React.PureComponent {
  state = {
    posts: [],
    maxPage: 0,
    currentPage: 1,
    loading: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.onScroll, 100));
    this.getDate();
  }

  onScroll = () => {
    const { currentPage, maxPage } = this.state;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (currentPage < maxPage)
        this.setState({ currentPage: currentPage + 1 }, () => this.getDate());
      else this.setState({ loading: false });
    }
  };

  getDate() {
    const { posts, currentPage } = this.state;
    axios(`${process.env.APP_API}/posts/paginate?page=${currentPage}`).then(
      json =>
        this.setState({
          posts: [...posts, ...json.data.data],
          maxPage: json.data.last_page,
        })
    );
  }

  render() {
    const { currentPage, maxPage, posts, loading } = this.state;

    if (currentPage == maxPage) {
      this.setState({ loading: false });
    }

    return (
      <>
        <BackgroundSpray ignition={currentPage} />
        <Container>
          <SEO title="home" />
          <Grid container spacing={4} justify="center">
            {posts.map(item => (
              <Grid item xs={12} md={6} key={item.id}>
                <Card
                  title={item.title}
                  colors={['#ff4']}
                  picture={{ image: item.image, title: 'test' }}
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

export default HomePage;
