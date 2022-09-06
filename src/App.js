import React, {useState, useEffect} from 'react';

const HelpText = (props) => {
  return (
    <label>{props.value}</label>
  )
}

const SearchForm = () => {
  const [keyword, setKeyword] = useState('')
  const [helpText, setHelpText] = useState('')
  useEffect(() => {
    const regex = /^[a-zA-Z0-9 ]*$/

    if(regex.test(keyword)){
      setHelpText('')
    } else {
      setHelpText('영어, 숫자, 띄어쓰기만 입력 가능')
    }
  });

  return (
    <form>
      <input type="text" name="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <HelpText value={helpText}/>
      <button type="submit">검색</button>
    </form>
  )
}

function App() {
  return (<SearchForm />);
}

export default App;
