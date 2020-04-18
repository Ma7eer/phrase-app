import React, {createContext, useState} from 'react'
import PropTypes from 'prop-types'

const FilterContext = createContext()

export const FilterProvider = ({children}) => {
  /* This allows us to change context from our tag component */
  const [currentTag, setCurrentTag] = useState('جميع العبارات')

  return (
    <FilterContext.Provider value={{currentTag, setCurrentTag}}>
      {children}
    </FilterContext.Provider>
  )
}

FilterProvider.propTypes = {
  children: PropTypes.array,
}

export default FilterContext
