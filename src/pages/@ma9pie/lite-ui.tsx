import { Divider, Flex, Grid, Spacer } from '@ma9pie/lite-ui';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Layout from '@/components/layouts/Layout';

const Test = () => {
  return (
    <Layout>
      <Container>
        <Flex col gap={8}>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Flex>

        <GridWrapper>
          <Grid row={2} col={2} gap={8}>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Grid>
        </GridWrapper>

        <Flex col gap={8}>
          <Divider></Divider>
          <Divider dashed></Divider>
        </Flex>

        <Flex col>
          <Box></Box>
          <Spacer y={8}></Spacer>
          <Box></Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Test;

const Container = styled.div`
  ${tw`flex flex-col gap-6`};
`;
const Box = styled.div`
  ${tw`w-4 h-4 bg-neutral-500`};
`;
const GridWrapper = styled.div`
  ${tw`w-fit`};
`;
