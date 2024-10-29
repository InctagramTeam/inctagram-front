import React, { useState } from 'react'

import { Button } from '@/shared'

type DropdownProps = {
  onAspectChange: (ratio: any) => void
}

const Dropdown = ({ onAspectChange }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleAspectChange = (ratio: any) => {
    onAspectChange(ratio) // Вызываем функцию для изменения соотношения
    setIsDropdownOpen(false) // Закрываем дропдаун
  }

  return (
    <div className={'relative'}>
      <Button
        className={'mt-2 rounded-md bg-blue-600 px-4 py-2 text-white'}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Выбрать соотношение
      </Button>

      {isDropdownOpen && (
        <div
          className={
            'absolute z-10 mt-2 w-32 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'
          }
        >
          <Button
            className={'block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'}
            onClick={() => handleAspectChange('1:1')}
          >
            1:1
          </Button>
          <Button
            className={'block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'}
            onClick={() => handleAspectChange('4:5')}
          >
            4:5
          </Button>
          <Button
            className={'block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'}
            onClick={() => handleAspectChange('16:9')}
          >
            16:9
          </Button>
        </div>
      )}
    </div>
  )
}

export default Dropdown
