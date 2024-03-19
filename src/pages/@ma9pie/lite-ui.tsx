import { Flex } from '@ma9pie/lite-ui';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Layout from '@/components/layouts/Layout';

const Test = () => {
  return (
    <Layout>
      <Flex>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Flex>
    </Layout>
  );
};

export default Test;

const Box = styled.div`
  ${tw`w-4 h-4 bg-neutral-500`};
`;
