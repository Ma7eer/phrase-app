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
    response: 'وأنت بخير و بصحة و سلامة',
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
  {
    phrase: 'كل سنة وانت طيب',
    response: 'وانت طيب',
    tags: [NewYears.tag],
  },
  {
    phrase: 'عيدكم مبارك',
    response: 'عيدكم مبارك',
    tags: [Eid.tag],
  },
  {
    phrase: 'رمضان مبارك',
    response: 'رمضان مبارك',
    tags: [ramadan.tag],
  },
  {
    phrase: 'عظم الله اجركم',
    response: '',
    tags: [funeral.tag],
  },
  {
    phrase: 'مو انت؟',
    response: 'بخير و الحمد لله',
    tags: [greeting.tag],
  },
  {
    phrase: 'عساكم من عواده',
    response: 'ينعاد علينا وعليكم بالخير',
    tags: [Eid.tag],
  },
]
