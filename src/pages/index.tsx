import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Button from '@/components/common/Button';
import Layout from '@/components/layouts/Layout';

const PACKAGE_LIST = [
  '@ma9pie/test-package',
  '@ma9pie/util-package-boilerplate',
  '@ma9pie/ui-package-boilerplate',
  '@ma9pie/math',
  '@ma9pie/use-modal',
  '@ma9pie/lite-ui',
];

const Index = () => {
  useEffect(() => {}, []);

  return (
    <Layout>
      <Container>
        {PACKAGE_LIST.map((pkg, idx) => (
          <Link key={idx} href={`/${pkg}`}>
            <Button>{pkg}</Button>
          </Link>
        ))}
      </Container>
    </Layout>
  );
};

export default Index;

const Container = styled.div`
  ${tw`flex gap-4 flex-wrap`};
`;
