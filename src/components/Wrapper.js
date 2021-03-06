import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ className, title, children, midheight, id }) => {
  return (
    <div className={className} midheight='true'>
      <div id={id}></div>
      <h1
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          marginBottom: '5%'
        }}
      >
        {title}
      </h1>
      {children}
    </div>
  );
};

const CustomWrapper = styled(Wrapper)`
  display: 'flex';
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  align-items: ${props => (props.align ? props.align : null)};
  height: ${props => (props.midheight ? '50%' : '100%')};
  padding: 45px 0;
  line-height: 1.5;
  width: ${props => (props.width ? props.width : null)};
  border-bottom: ${props => (props.lineBreak ? '1px solid #ececec' : 'none')};
`;

export default CustomWrapper;
