import React from 'react'

import tagList from '../../data/tagList'

/* Code for looping over an object found from 
https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays */

const Tags = () => (
  <div>
    {Object.keys(tagList).map((key, index) => {
      return (
        <label key={index} style={{padding: '10px'}}>
          {tagList[key].tag}
        </label>
      )
    })}
  </div>
)

export default Tags
