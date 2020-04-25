import styled from 'styled-components'

export const PageFooter = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2.5rem;
  color: white;
  text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  font-size: 1.5em;
  span {
    text-shadow: none;
  }
`

export const LinkToWebsite = styled.a`
  color: white;
  text-decoration: underline;
  text-decoration-color: var(--card-front-text-underline);
  &:hover {
    color: var(--card-front-text-underline);
  }
`
