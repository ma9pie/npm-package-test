import { Button } from '@ma9pie/ui-package-boilerplate';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/layouts/Layout';

const Test = () => {
  return (
    <Layout>
      <Button
        onClick={() => {
          console.log('click');
        }}
      >
        button
      </Button>
    </Layout>
  );
};

export default Test;
