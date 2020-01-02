// Click Menu Used in SuperStore Layout

import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Container800 } from '../reusableStyles/sections/Sections';
import OutsideAlerter from '../../utils/OutsideAlerter';

const Container = styled.div`
  display: flex;
  height: 100%;

  font-weight: bolder;
  z-index: 1;
  overflox-hidden;
`;

const DropDownContent = styled.div`
  z-index: 1;
  display: block;

  text-align: center;
  width: 100%;

  position: absolute;
  top: ${props => props.dropDownHeightTop || '80px'};
  left: 0;
`;

const Title = styled.span`
  font-weight: bolder;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  &:hover {
    display: inline-block;
  }
`;

const Button = styled.button`
  background: ${props =>
    props.active ? props.theme.colors.primary : 'transparent'};
  border: none;
  outline: none;

  padding: ${props => props.buttonPadding || '3rem 2rem'};

  font-size: 1.6rem;

  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const MyMenu3 = ({
  title,
  children,
  color,
  dropDownHeightTop,
  buttonPadding,
}) => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(prevMenu => !prevMenu);
  };
  return (
    <Container>
      <Button onClick={menuHandler} active={menu} buttonPadding={buttonPadding}>
        <Title style={{ color }}>{title}</Title>

        <Container800>
          {menu && (
            <OutsideAlerter menuhandler={menuHandler}>
              <DropDownContent dropDownHeightTop={dropDownHeightTop}>
                {children}
              </DropDownContent>
            </OutsideAlerter>
          )}
        </Container800>
      </Button>
    </Container>
  );
};

export default MyMenu3;
