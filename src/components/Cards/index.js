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

  const getVoice = (e, phrase) => {
    // to stop the parent onClick from triggering
    e.stopPropagation()

    window.AudioContext = window.AudioContext || window.webkitAudioContext
    const context = new AudioContext()

    function process(Data) {
      const source = context.createBufferSource()
      context.decodeAudioData(Data, buffer => {
        source.buffer = buffer
        source.connect(context.destination)
        source.start(context.currentTime)
      })
    }
    const request = new XMLHttpRequest()
    request.open('POST', 'http://localhost:3001/v1/speech', true)
    request.responseType = 'arraybuffer'
    request.onload = function onLoad() {
      const Data = request.response
      process(Data)
    }
    let text = phrase
    let voiceId = 'Zeina'
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    request.send(
      JSON.stringify({
        text,
        voiceId,
      }),
    )
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" key={index}>
      <S.CardFront onClick={() => setIsFlipped(true)}>
        {list.phrase}
        <S.voiceActivator
          role="img"
          aria-label="img"
          onClick={e => getVoice(e, list.phrase)}
        ></S.voiceActivator>
      </S.CardFront>
      <S.CardBack onClick={() => setIsFlipped(false)}>
        {list.response}
        <S.voiceActivator
          role="img"
          aria-label="img"
          onClick={e => getVoice(e, list.response)}
        ></S.voiceActivator>
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
