import React from 'react';
import PostList from 'components/Post-list/PostList';
import Location from 'components/location/Location';
import { StHomeContainer } from './Home.styles';

const Home = () => {
  return (
    <StHomeContainer>
      <Location />
      <PostList />
    </StHomeContainer>
  );
};

export default Home;
