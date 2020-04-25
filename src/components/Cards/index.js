import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
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
  // const [isLoading, setIsLoading] = useState(false)
  const [audioStatus, setAudioStatus] = useState('idle')

  const getVoice2 = async (e, phrase) => {
    // to stop the parent onClick from triggering
    e.stopPropagation()

    window.AudioContext = window.AudioContext || window.webkitAudioContext
    const context = new AudioContext()

    function process(Data) {
      const source = context.createBufferSource()

      context.decodeAudioData(Data, buffer => {
        source.buffer = buffer
        setAudioStatus('playing')
        setTimeout(() => {
          setAudioStatus('idle')
        }, source.buffer.duration * 1000)

        source.connect(context.destination)
        source.start(context.currentTime)
      })
    }

    let res = await Axios({
      method: 'POST',
      url: 'http://localhost:3001/v1/speech',
      data: {
        text: phrase,
        voiceId: 'Zeina',
      },
      responseType: 'arraybuffer',
    })
    process(res.data)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" key={index}>
      <S.CardFront onClick={() => setIsFlipped(true)}>
        {list.phrase}
        <S.voiceActivator
          role="img"
          aria-label="img"
          title="اضغط لسماع مقطع صوتي"
          status={audioStatus}
          onClick={e => {
            getVoice2(e, list.phrase)
          }}
        ></S.voiceActivator>
      </S.CardFront>
      <S.CardBack onClick={() => setIsFlipped(false)}>
        {list.response}
        <S.voiceActivator
          role="img"
          aria-label="img"
          title="اضغط لسماع مقطع صوتي"
          onClick={e => getVoice2(e, list.response)}
          status={audioStatus}
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
