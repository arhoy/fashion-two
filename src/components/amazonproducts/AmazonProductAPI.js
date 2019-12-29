import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div``;

const Title = styled.h4``;

const AmazonProductAPI = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Title>{item.ItemAttributes.Title}</Title>
    </Container>
  );
};

export default AmazonProductAPI;
