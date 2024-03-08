import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import Header from '@/components/layouts/Header';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header></Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  ${tw`flex flex-col`};
`;
const Content = styled.div`
  ${tw`flex flex-col min-h-[calc(100vh-64px)] p-6`};
`;
