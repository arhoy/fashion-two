import React from 'react';

import styled from '@emotion/styled';
const MegaMenuStyle = styled.div`
  z-index: 2;
  background: ${props => props.background || props.theme.colors.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;

  justify-content: space-between;

  & ul {
    list-style: none;
  }
`;

const MegaMenu2 = ({ children, background }) => {
  return <MegaMenuStyle background={background}>{children}</MegaMenuStyle>;
};

export default MegaMenu2;
