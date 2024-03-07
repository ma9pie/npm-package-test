import { useModal } from '@ma9pie/use-modal';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/layouts/Layout';

const Test = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      <button
        onClick={() =>
          openModal({
            component: () => <div>123</div>,
          })
        }
      >
        Open modal test
      </button>
    </Layout>
  );
};

export default Test;
