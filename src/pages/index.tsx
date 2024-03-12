import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Layout from '@/components/layouts/Layout';

const PACKAGE_LIST = [
  '@ma9pie/test-package',
  '@ma9pie/util-package-boilerplate',
  '@ma9pie/ui-package-boilerplate',
  '@ma9pie/math',
  '@ma9pie/use-modal',
  '@ma9pie/ui-kit',
];

const Index = () => {
  useEffect(() => {}, []);

  return (
    <Layout>
      <Container>
        {PACKAGE_LIST.map((pkg, idx) => (
          <Button key={idx} href={`/${pkg}`}>
            {pkg}
          </Button>
        ))}
      </Container>
    </Layout>
  );
};

export default Index;

const Container = styled.div`
  ${tw`flex gap-4 flex-wrap`};
`;
const Button = styled(Link)`
  ${tw`flex px-4 py-2 w-fit bg-neutral-200 transition-colors duration-300 rounded-md`};
  ${tw`hover:bg-neutral-300`};
`;
