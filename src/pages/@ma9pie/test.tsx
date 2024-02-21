import { add, div, mul, sub } from '@ma9pie/test';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/layouts/Layout';

const Test = () => {
  useEffect(() => {
    console.log(add(1, 2));
    console.log(sub(1, 2));
    console.log(mul(1, 2));
    console.log(div(1, 2));
  }, []);

  return <Layout></Layout>;
};

export default Test;
