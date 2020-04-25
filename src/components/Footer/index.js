import React from 'react'

import * as S from './style'

const Footer = () => {
  return (
    <S.PageFooter>
      <div>
        <span role="img" aria-label="img">
          👨🏿‍💻
        </span>{' '}
        صناعة{' '}
        <S.LinkToWebsite href="https://maheralkendi.dev/">
          ماهر الكندي
        </S.LinkToWebsite>
      </div>
      <div>
        الكود للصفحة{' '}
        <S.LinkToWebsite href="https://github.com/Ma7eer">
          مفتوح المصدر
        </S.LinkToWebsite>
      </div>
    </S.PageFooter>
  )
}

export default Footer
