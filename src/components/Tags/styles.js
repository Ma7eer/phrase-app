import styled from 'styled-components'

export const Tags = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
`

export const Tag = styled.label`
  background-color: var(--tag-background);
  margin: 2px;
  color: var(--tag-text);
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
    background: var(--tag-background-highlighted);
    color: hsla(0, 100%, 0%, 0.8);
    color: var(--tag-text-highlighted);
    text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  `}
`

export const TagCount = styled.span`
  background-color: var(--tag-counter-background);
  color: var(--tag-counter-text);
  font-size: 1em;
  padding: 2px 4px 2px 4px;
  border-radius: 2px;
  margin-right: 5px;
  text-shadow: none;
`
