import { floor, math } from '@ma9pie/math';
import Big from 'big.js';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/layouts/Layout';

const consoleExample = (title: string, arr: any) => {
  console.log(`========== ${title} ==========`);

  arr.map((item: any) => {
    console.log(item);
  });
};

/**
 * [value]
 * value() => string
 *
 * Returns calculated value as string
 */
const valueExample = () => {
  consoleExample('value', [
    math(1000).value(), // '1000'
    math('1e7').value(), // '10000000'
    math(1e-7).value(), // '0.0000001'
  ]);
};

/**
 * [toNumber]
 * toNumber() => number
 *
 * Returns calculated value as number
 */
const toNumberExample = () => {
  consoleExample('toNumber', [
    math(1000).toNumber(), // 1000
    math('1e7').toNumber(), // 10000000
    math(1e-7).toNumber(), // 1e-7
  ]);
};

/**
 * [add]
 * .add(n) => Big
 * n : number | string | BigInt
 *
 * Returns the current value added by n.
 *
 * If the n is invalid, it is treated as 0.
 */
const addExample = () => {
  consoleExample('add', [
    0.1 + 0.2, // 0.30000000000000004
    math(0.1).add(0.2).value(), // '0.3'
    math(1).add(2).add(3).value(), // '6'
    math(1).add(2, 3, 4).value(), // '10'
  ]);
};

/**
 * [sub]
 * .sub(n) => Big
 * n : number | string | BigInt
 *
 * Returns the current value subtracted by n.
 *
 * If the n is invalid, it is treated as 0.
 */
const subExample = () => {
  consoleExample('sub', [
    0.3 - 0.1, // 0.19999999999999998
    math(0.3).sub(0.1).value(), // '0.2'
    math(1).sub(2).sub(3).value(), // '-4'
    math(1).sub(2, 3, 4).value(), // '-8'
  ]);
};

/**
 * [mul]
 * .mul(n) => Big
 * n : number | string | BigInt
 *
 * Returns the current value multiplied by n.
 *
 * If the n is invalid, it is treated as 0.
 */
const mulExample = () => {
  consoleExample('mul', [
    0.6 * 3, // 1.7999999999999998
    math(0.6).mul(3).value(), // '1.8'
    math(2).mul(2).mul(2).value(), // '8'
    math(2).mul(2, 2, 2).value(), // '16'
  ]);
};

/**
 * [div]
 * .div(n) => Big
 * n : number | string | BigInt
 *
 * Returns the current value divided by n.
 *
 * If the n is invalid, it is treated as 0.
 */
const divExample = () => {
  consoleExample('div', [
    355 / 113, // 3.1415929203539825
    math(355).div(113).value(), // '3.141592920353982300'
    math(10).div(3).value(), // '3.333333333333333333'
    math(1000).div(10, 10, 10).value(), // '1'
  ]);
};

/**
 * [abs]
 * .abs() => Big
 *
 * Returns the absolute current value.
 */
const absExample = () => {
  consoleExample('abs', [
    math(-0.8).abs().value(), // '0.8'
  ]);
};

/**
 * [pow]
 * .pow(n) => Big
 * n : number | string | BigInt
 *
 * Returns the current value nth power.
 *
 * If the n is invalid, it is treated as 0.
 */
const powExample = () => {
  consoleExample('pow', [
    0.7 ** 2, // 0.48999999999999994
    Math.pow(0.7, 2), // 0.48999999999999994
    math(0.7).pow(2).value(), // '0.49'
  ]);
};

/**
 * [eq]
 * .eq(n) => boolean
 * n : number | string | BigInt
 *
 * Returns whether the current value and n are the same.
 */
const eqExample = () => {
  consoleExample('eq', [
    0.1 + 0.2 === 0.3, // false
    math(0.1).add(0.2).eq(0.3), // true
    math('0.0000001').eq(1e-7), // true
    math(1e7).eq(10000000), // true
  ]);
};

/**
 * [gt]
 * .gt(n) => boolean
 * n : number | string | BigInt
 *
 * Returns whether the current value is greater than n.
 */
const gtExample = () => {
  consoleExample('gt', [
    0.1 + 0.2 > 0.3, // true
    math(0.1).add(0.2).gt(0.3), // false
  ]);
};

/**
 * [gte]
 * .gte(n) => boolean
 * n : number | string | BigInt
 *
 * Returns whether the current value is greater than or equal to n.
 */
const gteExample = () => {
  consoleExample('gte', [
    0.1 + 0.2 <= 0.3, // false
    math(0.1).add(0.2).gte(0.3), // true
  ]);
};

/**
 * [lt]
 * .lt(n) => boolean
 * n : number | string | BigInt
 *
 * Returns whether the current value is less than n.
 */
const ltExample = () => {
  consoleExample('lt', [
    0.1 + 0.2 > 0.3, // true
    math(0.1).add(0.2).lt(0.3), // false
  ]);
};

/**
 * [lte]
 * .lte(n) => boolean
 * n : number | string | BigInt
 *
 * Returns whether the current value is less than or equal to n.
 */
const lteExample = () => {
  consoleExample('lte', [
    0.1 + 0.2 <= 0.3, // false
    math(0.1).add(0.2).lte(0.3), // true
  ]);
};

/**
 * [isZero]
 * .isZero() => boolean
 *
 * Returns whether the current value is 0.
 */
const isZeroExample = () => {
  consoleExample('isZero', [
    math(0).isZero(), // true
    math(-0).isZero(), // true
    math(0.0).isZero(), // true
    math('0').isZero(), // true
    math('-0').isZero(), // true
    math(Number.MIN_SAFE_INTEGER).isZero(), // false
    math(Number.MAX_SAFE_INTEGER).isZero(), // false
  ]);
};

const Test = () => {
  useEffect(() => {
    valueExample();
    toNumberExample();
    addExample();
    subExample();
    mulExample();
    divExample();
    absExample();
    powExample();
    eqExample();
    gtExample();
    gteExample();
    ltExample();
    lteExample();
    isZeroExample();
  }, []);

  useEffect(() => {
    console.log(new Big(1e-7).valueOf()); // '1e-7'
    console.log(math(1e-7).value()); // '0.0000001'
  }, []);

  return <Layout></Layout>;
};

export default Test;
