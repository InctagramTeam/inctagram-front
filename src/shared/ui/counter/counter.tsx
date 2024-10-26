'use client'
import s from './counter.module.scss'

type Props = {
  value?: number
}

export const Counter = (props: Props) => {
  const { value = 0 } = props
  const arr = value.toString().split('')

  while (arr.length < 6) {
    arr.unshift('0')
  }

  return (
    <div className={s.counter}>
      {arr.map((el, i) => (
        <>
          <div className={s.divider}></div>

          <p className={s.value} key={i}>
            {el}
          </p>
        </>
      ))}
    </div>
  )
}
