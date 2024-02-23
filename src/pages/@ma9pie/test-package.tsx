import { add, div, mul, sub, useHelloWorld } from '@ma9pie/test-package';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/layouts/Layout';

const Test = () => {
  useHelloWorld();

  useEffect(() => {
    console.log(add(1, 2));
    console.log(sub(1, 2));
    console.log(mul(1, 2));
    console.log(div(1, 2));
  }, []);

  return <Layout></Layout>;
};

export default Test;
