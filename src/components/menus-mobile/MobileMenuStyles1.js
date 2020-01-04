import styled from '@emotion/styled';
import { FaTimes } from 'react-icons/fa';
import NoStyleLink from '../Links/NoStyleLink';

const MobileMenuContainer = styled.div`
  z-index: 11;
  background: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
  position: absolute;
  font-size: 2.2rem;
  top: 0;
  right: 0;
  width: 100%;
`;

const MobileMenuContainerPrimaryLight = styled(MobileMenuContainer)`
  background: ${props => props.theme.colors.primaryLight};
`;

const LinkContainerUl = styled.ul`
  list-style: none;
  height: 100%;
`;

const LinkWrapper = styled.li`
  display: flex;
  justify-content: center;
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  margin-right: 4px;
  cursor: pointer;
`;

const CloseIconContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};
  padding: 2rem;
`;

const StyledLink = styled(NoStyleLink)`
  color: ${props => props.theme.colors.white};
  padding: 0 1rem;
  background-image: linear-gradient(
    110deg,
    transparent,
    transparent 50%,
    #fff 0
  );
  transition: all 0.25s;
  background-size: 235%;

  margin: 2rem 0;
  text-align: center;
  &:hover {
    background-position: 100%;
    color: ${props => props.theme.colors.primaryDark};
    -webkit-transform: translateX(0.5rem);
    transform: translateX(0.5rem);
  }
`;

export {
  CloseIcon,
  CloseIconContainer,
  MobileMenuContainer,
  MobileMenuContainerPrimaryLight,
  StyledLink,
  LinkContainerUl,
  LinkWrapper,
};
