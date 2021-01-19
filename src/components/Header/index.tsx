import React, { PropsWithChildren, ReactNode } from 'react';

import logo from '../../assets/SpotPool.svg';

import { Container, HeaderLogo, HeaderTitleDiv } from './styles';

interface IProps {
  children?: ReactNode;
}

const Header: React.FC<IProps> = ({ children }: PropsWithChildren<IProps>) => (
  <Container>
    <HeaderTitleDiv>
      <HeaderLogo src={logo} />
    </HeaderTitleDiv>

    {children}
  </Container>
);

export default Header;
