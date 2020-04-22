import tagList from './tagList'

const {greeting, ramadan, Eid, NewYears} = tagList

export default [
  {
    phrase: 'كل عام وانت بخير',
    response: 'وانت بخير',
    tags: [ramadan.tag, Eid.tag, NewYears.tag],
  },
  {
    phrase: 'رمضان كريم',
    response: 'ينعاد علينا وعليكم',
    tags: [ramadan.tag],
  },
  {
    phrase: 'من العايدين الفايزين',
    response: 'ما اعرف',
    tags: [Eid.tag],
  },
  {
    phrase: 'السلام عليكم',
    response: 'وعليكم السلام',
    tags: [greeting.tag],
  },
]
