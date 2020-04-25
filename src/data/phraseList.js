import tagList from './tagList'

const {
  greeting,
  ramadan,
  Eid,
  NewYears,
  funeral,
  goodNews,
  sicknessOrInjury,
  newBorn,
  wedding,
} = tagList

export default [
  {
    phrase: 'احسن الله عزاكم',
    response: 'لله البقاء',
    tags: [funeral.tag],
  },
  {
    phrase: 'كل عام وأنت بخير',
    response: 'وأنت بخير',
    tags: [ramadan.tag, Eid.tag, NewYears.tag],
  },
  {
    phrase: 'رمَضَان كريم',
    response: 'ينعاد علينا وعليكم',
    tags: [ramadan.tag],
  },
  {
    phrase: 'من العايْدِينَ الفايزِين',
    response: 'من السالمِينَ الغانمِين',
    tags: [Eid.tag],
  },
  {
    phrase: 'السَلام عليكم',
    response: 'وعليكم السلام',
    tags: [greeting.tag],
  },
  {
    phrase: 'مبْروك',
    response: 'الله يبارك فيك',
    tags: [goodNews.tag, newBorn.tag, wedding.tag],
  },
  {
    phrase: 'الله يِشفِيْك',
    response: 'آمين',
    tags: [sicknessOrInjury.tag],
  },
  {
    phrase: 'سلامات',
    response: 'الله يِسَلْمَك',
    tags: [sicknessOrInjury.tag],
  },
]
