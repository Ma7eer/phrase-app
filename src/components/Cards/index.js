import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import ReactCardFlip from 'react-card-flip'

import FilterContext from '../../context/filterContext'

import * as S from './style'

const CardsList = () => {
  const {phrases} = useContext(FilterContext)
  return (
    <S.Cards>
      {phrases.map((list, index) => {
        return <FlipCard list={list} index={index} key={index} />
      })}
    </S.Cards>
  )
}

const FlipCard = ({list, index}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" key={index}>
      <S.CardFront onClick={() => setIsFlipped(true)}>
        {list.phrase}
      </S.CardFront>
      <S.CardBack onClick={() => setIsFlipped(false)}>
        {list.response}
      </S.CardBack>
    </ReactCardFlip>
  )
}

FlipCard.propTypes = {
  list: PropTypes.shape({
    phrase: PropTypes.string,
    response: PropTypes.string,
  }),
  index: PropTypes.number,
}

export default CardsList
