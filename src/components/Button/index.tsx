import React from 'react'

import { Button } from 'val-design'

const CustomButton = () => {
  return (
    <>
      <h3>Button Component</h3>
      <Button type="primary" size="lg">
        Button
      </Button>
      <Button style={{ marginLeft: '10px' }} type="danger" size="lg">
        Button
      </Button>
      <Button style={{ marginLeft: '10px' }} type="default" size="lg">
        Button
      </Button>
      <Button style={{ marginLeft: '10px' }} type="primary" size="sm">
        Button
      </Button>
      <Button style={{ marginLeft: '10px' }} type="danger" size="sm">
        Button
      </Button>
    </>
  )
}

export default CustomButton
