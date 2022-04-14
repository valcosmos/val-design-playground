import React, { ChangeEvent, useState } from 'react'
import { Input } from 'val-design'

const CustomInput = () => {
  const [data, setData] = useState('change event')
  return (
    <>
      <h3>Input Component</h3>
      <div className="content">
        <Input placeholder="large" size="lg" />
        <Input placeholder="small" size="sm" />
        <Input placeholder="disabled" disabled />
        <Input placeholder="icon" icon={'cannabis'}></Input>
        <Input placeholder="prepend" prepend={'https://'}></Input>
        <Input placeholder="append" append={'.com'}></Input>
        <hr />
        <p style={{ width: '100%' }}>{data}</p>
        <Input
          value={data}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setData(e.target.value)
          }}
        />
      </div>
    </>
  )
}

export default CustomInput
