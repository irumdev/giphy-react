import React, {useState, useEffect} from 'react';
import axios from 'axios';
import useAsync from './useAsync';

const API_KEY = ''

async function getSearchResult(keyword) {
  const response = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10`
  );
  return response.data.data;
}

const HelpText = (props) => {
  return <label>{props.value}</label>
}

const SubmitButton = (props) => {
  return <button disabled={(props.isDisable.disabled)? "disabled" : ""} onClick={props.onClick}>검색</button>
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
  }, [keyword]);

  
  const [state, refetch] = useAsync(getSearchResult, [], keyword);
  const { loading, data: gifs, error } = state;

  if (loading) return <div>gif 리스트 가져오는 중...</div>;
  else if (error) return <div>에러가 발생했습니다.</div>;
  else if (!gifs) return <div>검색 결과가 없습니다.</div>;

  return (
    <>
      <input type="text" name="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <SubmitButton isDisable={isDisable} onClick={refetch}/>
      <HelpText value={helpText}/>
      <ul>
        {gifs.map(gif => (
          <img key={gif.id} alt='' src={gif.images.downsized.url}></img>
        ))}
      </ul>
    </>
  )
}

function App() {
  return (<SearchForm />);
}

export default App;
