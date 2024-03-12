import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({ className, children, onClick }: Props) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  ${tw`flex px-4 py-2 w-fit bg-neutral-200 transition-colors duration-300 rounded-md`};
  ${tw`hover:bg-neutral-300`};
`;
