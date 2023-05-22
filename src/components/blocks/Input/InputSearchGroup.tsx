import SearchButton from '@/components/atoms/Button/DefaultButton'
import InputSearch from '@/components/atoms/Input/InputSearch'

export type InputSearchGroupProps = {
  inputText: string
  onChangeText: (e: React.ChangeEvent) => void
  search: () => void
}

const InputSearchGroup = ({ inputText, onChangeText, search }: InputSearchGroupProps) => {
  return (
    <div>
      <InputSearch inputText={inputText} onChangeText={onChangeText} />
      <SearchButton name={'검색'} onClick={search} />
    </div>
  )
}

export default InputSearchGroup
