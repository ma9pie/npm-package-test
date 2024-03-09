import { useModal } from '@ma9pie/use-modal';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Button from '@/components/common/Button';
import Layout from '@/components/layouts/Layout';

const Test = () => {
  const { openModal, openBottomSheet } = useModal();

  return (
    <Layout>
      <Container>
        <Button
          onClick={() =>
            openModal({
              component: () => <div>123</div>,
            })
          }
        >
          Open Modal
        </Button>
        <Button
          onClick={() =>
            openBottomSheet({
              component: () => <div>123</div>,
            })
          }
        >
          Open BottomSheet
        </Button>
      </Container>
    </Layout>
  );
};

export default Test;

const Container = styled.div`
  ${tw`flex gap-4 flex-wrap`};
`;
