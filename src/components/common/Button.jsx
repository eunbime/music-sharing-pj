import React from 'react';
import styled from 'styled-components';

const Button = ({ text, handler, mode }) => {
  const buttonClickEventHandler = () => {
    handler();
  };
  return (
    <StButton mode={mode} onClick={buttonClickEventHandler}>
      {text}
    </StButton>
  );
};

// 공통 버튼 스타일 지정 필요, 디폴트 데이터
const StButton = styled.button`
  font-size: 1.25rem;
  padding: 0.5625rem 2.125rem;
  font-weight: bold;
  border-radius: 5px;
  border: 0.15rem solid var(--mainOrange);
  background: ${(props) => (props.mode === 'black' ? 'transparent' : '#FF683B')};
  color: ${(props) => (props.mode === 'black' ? '#FF683B' : '#fff')};
  transition: 0.3s;

  &:hover {
    background: ${(props) => (props.mode === 'black' ? '#FF683B' : '#222')};
    color: ${(props) => (props.mode === 'black' ? '#fff' : '#FF683B')};
  }
`;

export default Button;
