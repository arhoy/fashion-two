import React from 'react';

import socialIcons from '../../constants/socialIcons';

import styled from '@emotion/styled';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

const d = new Date().getFullYear();

const FooterStyle = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.black};
  font-size: 3rem;
  margin: 1rem;
  padding: 1rem;
`;

const StyledImage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: ${props => props.theme.colors.primary};
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const A = styled.a`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  text-transform: uppercase;
`;
const Attribution = styled.p`
  font-size: 1.2rem;
`;

const FooterBlurb = styled.p`
  font-weight: bold;
`;

const MainFooter = () => {
  return (
    <FooterStyle>
      <ul>
        {socialIcons.map(icon => (
          <SocialIcon
            key={icon.url}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </SocialIcon>
        ))}
      </ul>
      <Div>
        Made In |
        <StyledImage>
          <FaCanadianMapleLeaf />
        </StyledImage>
        | Alberta
      </Div>
      tel: 587 772 5536
      <FooterBlurb>RIPPLEJS THEMES {d} &copy; </FooterBlurb>
      <Attribution>
        Created by {` `}
        <A target="_blank" rel="noopener noreferrer" href="https://aquasar.io/">
          aquasar.io
        </A>
      </Attribution>
    </FooterStyle>
  );
};

export default MainFooter;
