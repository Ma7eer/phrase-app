import tagList from './tagList'

const {greeting, ramadan, Eid, NewYears} = tagList

export default [
  {
    phrase: 'السلام عليكم',
    response: 'وعليكم السلام',
    tags: [greeting.tag, 'جميع العبارات'],
  },
  {
    phrase: 'كل عام وانت بخير',
    response: 'وانت بخير',
    tags: [ramadan.tag, Eid.tag, NewYears.tag, 'جميع العبارات'],
  },
  {
    phrase: 'رمضان كريم',
    response: 'ينعاد علينا وعليكم',
    tags: [ramadan.tag, 'جميع العبارات'],
  },
]
