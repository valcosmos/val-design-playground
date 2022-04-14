import React, { ChangeEvent, FC, useState } from 'react'
import { AutoComplete, Input } from 'val-design'
import axios from 'axios'

import { DataSourceType } from 'val-design/dist/components/AutoComplete/autoComplete'

interface CustomProps {
  login: string
  url: string
  avatar_url: string
}

const CustomAutoComplete: FC = () => {
  const [url, setUrl] = useState('https://api.github.com/search/users?q=')

  // request
  const handleFetch = async (query: string) => {
    const { data } = await axios.get(`${url}${query}`)
    return data.items
      .slice(0, 10)
      .map((item: any) => ({ value: item.login, ...item }))
  }

  const handleRenderOption = (value: any) => {
    const item = value as DataSourceType<CustomProps>
    return (
      <>
        <h2>login: {item.login}</h2>
        <p>url:{item.url}</p>
        <p>avatar:{item.avatar_url}</p>
      </>
    )
  }

  return (
    <div>
      <h3>AutoComplete Component</h3>
      <p>The test used here is to get user information in the GitHub api:</p>
      <p>这里测试使用的是GitHub api中的获取用户信息:</p>
      <p>{url}</p>
      <Input
        value={url}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setUrl(e.target.value)
        }}
      ></Input>
      <div className="content col">
        <h4>Default:</h4>
        <AutoComplete
          fetchSuggestions={handleFetch}
          onSelect={(item) => {
            // selected data
            console.log(item)
          }}
        />
        <hr className="mt-3 mb-3" />
        <h4>Custom render:</h4>
        <AutoComplete
          fetchSuggestions={handleFetch}
          onSelect={(item) => {
            // selected data
            console.log(item)
          }}
          renderOptions={handleRenderOption}
        />
      </div>
    </div>
  )
}

export default CustomAutoComplete
