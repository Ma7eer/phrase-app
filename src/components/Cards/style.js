import styled from 'styled-components'

export const Cards = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
`

export const CardFront = styled.div`
  background-color: var(--card-front-background);
  color: var(--card-front-text);
  padding: 8px 12px 8px 12px;
  margin: 8px;
  border-radius: 3px;
  font-size: 2em;
  cursor: pointer;
  border: 1px solid var(--card-front-border);
  transform-style: preserve-3d;

  /* center text */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  text-decoration-color: var(--card-front-text-underline);
  text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;

  /* card size */
  width: 18rem;
  height: 12rem;

  z-index: 1;
`
export const CardBack = styled.div`
  background-color: var(--card-back-background);
  color: var(--card-back-text);
  padding: 8px 12px 8px 12px;
  margin: 8px;
  border-radius: 3px;
  font-size: 2em;
  cursor: pointer;
  border: 1px solid var(--card-back-border);
  transform-style: preserve-3d;

  /* center text */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  text-decoration-color: var(--card-back-text-underline);

  /* card size */
  width: 18rem;
  height: 12rem;
`

export const voiceActivator = styled.span`
  position: fixed;
  bottom: 10px;
  right: 80%;
  padding: 10px;
  z-index: 2;
  text-shadow: none;
  &::before {
    content: '🔈';
  }
  &:hover {
    &::before {
      content: '🔊';
    }
  }
`
