import { floor, math } from '@ma9pie/math';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/layouts/Layout';

const Test = () => {
  useEffect(() => {
    console.log(math(3).add(1, 2).value());
    console.log(floor(3.123, 2));
  }, []);

  return <Layout></Layout>;
};

export default Test;
