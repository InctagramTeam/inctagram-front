import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select/select'
import EnglishFlagIcon from '@/shared/assets/icons/EnglishFlagIcon'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'
import { SelectIcon } from '@radix-ui/react-select'

export const LanguageSelection = () => {
  return (
    <Select>
      <SelectTrigger className="w-[160px]">
        <SelectIcon>
          <EnglishFlagIcon className={'h-5 w-5 fill-Light-100'} />
        </SelectIcon>
        <SelectValue placeholder="English" />
        <ChevronDown />
      </SelectTrigger>
      <SelectContent
        className={`w-full max-w-[160px] border-[1px] border-t-none border-Dark-100/50`}
      >
        <SelectGroup>
          <SelectItem className={`w-full max-w-[160px] border-Light-100`} value="English">
            English
          </SelectItem>
          <SelectSeparator />
          <SelectItem value="Russia">Russia</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
