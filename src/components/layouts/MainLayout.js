import React from 'react';
import { Global, css } from '@emotion/core';
import NavMain from '../navigation/NavMain';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// real global scss styles
import '../../scss/main.scss';
import MainFooter from './MainFooter';

const theme = {
  colors: {
    primary: 'rgb(92, 52, 145)',
    primaryDark: 'rgb(66, 37, 95)',
    primaryLight: 'rgb(148, 103, 206)',
    primaryVeryLight: 'rgb(232, 213, 250)',
    primaryTransparent: 'rgba(92, 52, 145,0.2)',
    secondary: 'rgb(24, 163, 201)',
    lightgrey: 'rgb(240,240,240)',
    lightgrey2: 'rgb(224, 217, 217)',
    white: '#fff',
    black: '#1a1a1a',
    blackTransparent: 'rgba(41, 43, 46, 0.4)',
    darkgrey: 'rgb(109, 109, 109)',
    red: 'rgb(218, 18, 31)',
    laserGreen: 'rgb(14, 205, 109)',
    laserBlue: 'RGB(38, 132, 255)',
    lightRed: 'rgb(232, 180, 182)',
    blue: 'rgb(19, 73, 178)',
    lightGreen: '#D4EDDA',
    green: 'rgb(31, 90, 46)',
    coolTeal: 'rgba(70, 250, 250, 1)',
  },
  pageWidth: {
    fixed: '800px',
    fixedHome: '900px',
  },
  screenSize: {
    mobileL: '600px',
    mobileS: '400px',
    mobileVS: '300px',
    eightHundred: '800px',
    nineHundred: '900px',
    oneThousand: '1000px',
  },
};

const Div = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] 1fr [full-end];
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns:
      [full-start] 0.5fr
      [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
      [center-end] 0.5fr [full-end];
  }
`;

const DivFixed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`;

const NavLayout = styled.header`
  grid-column: center-start/center-end;
`;

const FullNavLayout = styled.header`
  grid-column: full-start/full-end;
`;

const Main = styled.main`
  grid-column: center-start/center-end;
`;

const MainFull = styled.main`
  grid-column: full-start/full-end;
`;

const FooterLayout = styled.footer`
  grid-column: center-start/center-end;
`;

const FullFooterLayout = styled.footer`
  grid-column: full-start/full-end;
`;

const MainLayout = ({ children, full }) => {
  const white = '#fff';
  const primaryColor = 'rgb(92, 52, 145)';

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          body {
            background: ${white};
            margin: 0;
            font-family: Poppins, Roboto, Helvetica, Arial, sans-serif;
          }

          h1 {
            color: ${primaryColor};
            font-family: Poppins;
          }
        `}
      />

      {full ? (
        <ThemeProvider theme={theme}>
          <Div>
            <FullNavLayout>
              <NavMain />
            </FullNavLayout>
            <MainFull>{children}</MainFull>
            <FullFooterLayout>
              <MainFooter />
            </FullFooterLayout>
          </Div>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <DivFixed>
            <NavLayout>
              <NavMain />
            </NavLayout>
            <Main>{children}</Main>
            <FooterLayout>
              <MainFooter />
            </FooterLayout>
          </DivFixed>
        </ThemeProvider>
      )}
    </>
  );
};
MainLayout.propTypes = {
  full: PropTypes.bool,
};
MainLayout.defaultProps = {
  full: true,
};

export default MainLayout;
