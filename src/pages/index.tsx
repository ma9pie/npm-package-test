import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Layout from '@/components/layouts/Layout';

const Index = () => {
  useEffect(() => {}, []);

  return (
    <Layout>
      <Container>
        <Button href="/@ma9pie/test">@ma9pie/test</Button>
      </Container>
    </Layout>
  );
};

export default Index;

const Container = styled.div`
  ${tw``};
`;
const Button = styled(Link)`
  ${tw`flex px-4 py-2 w-fit bg-neutral-200 transition-colors duration-300 rounded-md`};
  ${tw`hover:bg-neutral-300`};
`;
