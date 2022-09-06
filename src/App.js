import React, {useState, useEffect} from 'react';

const SearchForm = () => {
  const [keyword, setKeyword] = useState('')

  return (
    <form>
      <input
        type="text"
        name="keyword"
        value={keyword}
        onChange={() => setKeyword(keyword)}
      />
      <button type="submit">검색</button>
    </form>
  )
}

function App() {
  return (<SearchForm />);
}

export default App;
