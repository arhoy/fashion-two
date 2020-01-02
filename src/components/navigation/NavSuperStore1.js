import React, { useState } from 'react';
import { Link } from 'gatsby';

import { FaAlignRight } from 'react-icons/fa';

import styled from '@emotion/styled';

import MyMenu3 from '../menus/MyMenu3';

import { Container1200 } from '../reusableStyles/sections/Sections';

import MegaMenu2 from '../menus/MegaMenus/MegaMenu2';

import SuperStoreList1 from '../menus/MegaMenus/MegaMenuLists/Style2/SuperStoreList1';

import Search from '../algolia/Search';
import { MobileMenu1 } from '../menus-mobile/Electronics/MobileMenu1';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import SuperStoreList2 from '../menus/MegaMenus/MegaMenuLists/Style2/SuperStoreList2';

const Header = styled.header`
  height: 80px;
  position: relative;

  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};

  display: flex;

  margin: 0 auto;

  justify-content: space-around;
  align-items: center;

  z-index: 1;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
  }
`;

const Logo = styled.div`
  padding: 0;
  margin: 0;
`;
const LogoLink = styled(Link)`
  font-size: 2.9rem;
  padding: 0;
  margin: 0;

  text-decoration: none !important;
`;

const LogoSpan2 = styled.span`
  color: ${props => props.theme.colors.white};
  letter-spacing: 4px;
  display: flex;

  border-bottom: 2px solid ${props => props.theme.colors.primary};
  & span {
    display: inline-block;
    height: 40px;
    font-style: italic;
    border-bottom: thick double ${props => props.theme.colors.primaryLight};
  }
`;

const NavContainer = styled.nav`
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const BurgerIcon = styled(FaAlignRight)`
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const SearchContainerMobile = styled.div`
  margin: 0 auto;
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CustomButtonStyle2 = styled(ButtonStyle2)`
  display: flex;
`;

const NavSuperStore1 = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <Logo>
          <LogoLink to="/">
            <LogoSpan2>
              Super<span>Store</span>
            </LogoSpan2>
          </LogoLink>
        </Logo>

        <NavContainer>
          <MyMenu3 color={'white'} title={`SHOP`}>
            <Container1200>
              <MegaMenu2 background={'white'}>
                <SuperStoreList1 />
              </MegaMenu2>
            </Container1200>
          </MyMenu3>
          <MyMenu3 color={'white'} title={`BRANDS`}>
            <Container1200>
              <MegaMenu2 background={'white'}>
                <SuperStoreList2 />
              </MegaMenu2>
            </Container1200>
          </MyMenu3>

          <CustomButtonStyle2>
            <a href="tel:587-772-5536">587-772-5536</a>
          </CustomButtonStyle2>
        </NavContainer>

        <BurgerIcon onClick={mobileMenuHandler} />
        {mobileMenuOpen ? (
          <MobileMenu1 mobileMenuHandler={mobileMenuHandler} />
        ) : null}
      </Header>
      <SearchContainerMobile>
        <Search />
      </SearchContainerMobile>
    </>
  );
};

export default NavSuperStore1;
