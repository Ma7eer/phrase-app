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
  background-color: var(--yellow);
  color: var(--black);
  padding: 8px 12px 8px 12px;
  margin: 8px;
  border-radius: 3px;
  font-size: 2em;
  cursor: pointer;
  border: 1px solid rgb(238, 238, 238);
  transform-style: preserve-3d;

  /* center text */
  display: flex;
  align-items: center;
  justify-content: center;

  /* card size */
  width: 18rem;
  height: 12rem;
`
export const CardBack = styled.div`
  background-color: var(--white);
  color: var(--black);
  padding: 8px 12px 8px 12px;
  margin: 8px;
  border-radius: 3px;
  font-size: 2em;
  cursor: pointer;
  border: 1px solid rgb(238, 238, 238);
  transform-style: preserve-3d;

  /* center text */
  display: flex;
  align-items: center;
  justify-content: center;

  /* card size */
  width: 18rem;
  height: 12rem;
`
