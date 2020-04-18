import React, {useContext} from 'react'

import FilterContext from '../../context/filterContext'

import * as S from './styles'

import tagList from '../../data/tagList'
import phraseList from '../../data/phraseList'

/* Code for looping over an object found from 
https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays 
*/

const countOccurrence = str => {
  let counter = 0
  phraseList.forEach(list => {
    for (let val of list.tags) {
      if (val === str) {
        counter++
      }
    }
  })
  return counter
}

const countTotal = () => {
  let counter = 0
  phraseList.forEach(() => {
    counter++
  })
  return counter
}

const TagsList = () => {
  const {currentTag, setCurrentTag} = useContext(FilterContext)

  return (
    <S.Tags>
      {Object.keys(tagList).map((key, index) => {
        return (
          <S.Tag key={index} currentTag={currentTag === tagList[key].tag}>
            {tagList[key].tag}
            <input
              type="radio"
              value={tagList[key].tag}
              name="tag"
              onChange={e => setCurrentTag(e.currentTarget.value)}
            />
            <S.TagCount>{countOccurrence(tagList[key].tag)}</S.TagCount>
          </S.Tag>
        )
      })}
      {/* 'all' case */}
      <S.Tag currentTag={currentTag === 'جميع العبارات'}>
        جميع العبارات
        <input
          type="radio"
          value="جميع العبارات"
          name="tag"
          onChange={e => setCurrentTag(e.currentTarget.value)}
        />
        <S.TagCount>{countTotal()}</S.TagCount>
      </S.Tag>
    </S.Tags>
  )
}

export default TagsList
