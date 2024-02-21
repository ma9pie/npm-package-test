import Link from 'next/link';
import React from 'react';
import tw, { styled } from 'twin.macro';

const Header = () => {
  return (
    <Wrapper>
      <Button href="/">Home</Button>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${tw`flex items-center h-16 px-6 border-b border-solid border-neutral-400`};
`;
const Button = styled(Link)`
  ${tw`text-3xl font-semibold`};
`;
