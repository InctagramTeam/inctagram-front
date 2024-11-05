'use client'
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
    <div
      className={
        'flex h-[48px] w-[203px] items-center rounded-md border border-Dark-300 bg-Dark-700 p-2'
      }
    >
      {arr.map((el, i) => (
        <div className={'flex items-center'} key={i}>
          {i !== 0 && <div className={'h-[30px] w-[1px] bg-Dark-300'}></div>}
          <p className={'w-[30px] text-center text-lg font-bold leading-[30px]'}>{el}</p>
        </div>
      ))}
    </div>
  )
}
