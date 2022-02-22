import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledLink = styled(Link)`
    text-decoration: none;
    opacity: 0;
    &:focus, &:hover, &:link, &:active {
        text-decoration: none;
    }
`;

export default (props) => {
  return (
    <>
      <span style={{position: 'absolute', left: 0}}>{ props.text }</span>
      <StyledLink {...props} />
    </>
  )
}