import React, {createContext, useState} from 'react'
import PropTypes from 'prop-types'

import phraseList from '../data/phraseList'

const FilterContext = createContext()

export const FilterProvider = ({children}) => {
  /* This allows us to change context from our tag component */
  const [currentTag, setCurrentTag] = useState('جميع العبارات')
  const [phrases, setPhrases] = useState(phraseList)

  return (
    <FilterContext.Provider
      value={{currentTag, setCurrentTag, phrases, setPhrases}}
    >
      {children}
    </FilterContext.Provider>
  )
}

FilterProvider.propTypes = {
  children: PropTypes.array,
}

export default FilterContext
