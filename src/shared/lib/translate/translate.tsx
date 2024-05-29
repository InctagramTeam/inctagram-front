'use client'
import { FC, Fragment, ReactNode } from 'react'

const tagsRegex = /(<\d+>[^<>]*<\/\d+>)/
const openCloseTagRegex = /<(\d+)>([^<>]*)<\/(\d+)>/

type TranslateType = {
  /** Передаем в объект: ключ это строка, значение функция */
  tags?: Record<string, (str: string) => ReactNode>
  text: string
}

/** Используется с целью применить перевод к тексту обернутому html тэгами */
export const Translate = (props: TranslateType) => {
  return <>{interpolateTags(props)}</>
}

const interpolateTags = (data: TranslateType) => {
  const { tags, text } = data

  if (!tags) {
    return text
  }

  const tokens = text.split(tagsRegex)

  return tokens.map(token => {
    const matchResult = openCloseTagRegex.exec(token)

    if (!matchResult) {
      return token
    }

    const [, openTag, content, closeTag] = matchResult

    if (!openTag || !closeTag || openTag !== closeTag) {
      return token
    }

    return <Fragment key={content}>{tags[openTag]?.(content ?? '')}</Fragment>
  })
}
