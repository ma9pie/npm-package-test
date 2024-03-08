import React from 'react';
import tw, { styled } from 'twin.macro';

import Layout from '@/components/layouts/Layout';

const NotFound = () => {
  return (
    <Layout>
      <Wrapper>
        <Text>404</Text>
        <Text>Not Found</Text>
      </Wrapper>
    </Layout>
  );
};

export default NotFound;

const Wrapper = styled.div`
  ${tw`flex-1 flex flex-col justify-center items-center pb-20`};
`;
const Text = styled.p`
  ${tw`font-semibold`};
  ${tw`text-5xl`};
  ${tw`md:text-7xl`};
`;
