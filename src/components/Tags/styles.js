import styled from 'styled-components'

export const Tags = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Tag = styled.label`
  background-color: var(--black);
  margin: 2px;
  color: var(--white);
  border-radius: 3px;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  input {
    display: none;
  }
  ${props =>
    props.currentTag &&
    `
    background: var(--yellow);
    color: hsla(0, 100%, 0%, 0.8);
  `}
`

export const TagCount = styled.span`
  background-color: var(--white);
  color: var(--black);
  font-size: 1em;
  padding: 2px 4px 2px 4px;
  border-radius: 2px;
  margin-right: 5px;
`
