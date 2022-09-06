import React, {useState, useEffect} from 'react';

const HelpText = (props) => {
  return <label>{props.value}</label>
}

const SubmitButton = (props) => {
  return <button disabled={(props.isDisable.disabled)? "disabled" : ""} type="submit">검색2</button>
}

const SearchForm = () => {
  const [keyword, setKeyword] = useState('')
  const [helpText, setHelpText] = useState('')
  const [isDisable, setIsDisable]  = useState({disabled: false})
  useEffect(() => {
    const regex = /^[a-zA-Z0-9 ]*$/
    
    if(regex.test(keyword)){
      setHelpText('')
      setIsDisable({disabled: false})
    } else {
      setHelpText('영어, 숫자, 띄어쓰기만 입력 가능')
      setIsDisable({disabled: true})
    }
  });

  return (
    <form>
      <input type="text" name="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <SubmitButton isDisable={isDisable}/>
      <HelpText value={helpText}/>
    </form>
  )
}

function App() {
  return (<SearchForm />);
}

export default App;
