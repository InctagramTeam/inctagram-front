import { Label } from '@radix-ui/react-label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select/select'
import { SelectGroup, SelectLabel } from '@radix-ui/react-select'

const SelectBoxDemo = () => {
  return (
    // <div className={'w-[210px] h-[60px] border-2 border-red-400'}>
    <Select>
      <Label className={'w-[270px] h-[60px] border border-red-800'}>Select-box</Label>
      <SelectTrigger className={'w-[210px] h-[36px] border-2 border-red-400 text-red-600'}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    // </div>
  )
}

export default SelectBoxDemo
