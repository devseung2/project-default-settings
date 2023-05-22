export type InputSearchProps = {
  inputText: string
  onChangeText: (e: React.ChangeEvent) => void
}

const InputSearch = ({ inputText, onChangeText }: InputSearchProps) => {
  return <input type="text" placeholder="검색어" value={inputText} onChange={onChangeText} />
}

export default InputSearch
