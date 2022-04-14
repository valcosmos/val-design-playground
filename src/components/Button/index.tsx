import React from 'react'

import { Button } from 'val-design'

const CustomButton = () => {
  return (
    <>
      <h3>Button Component</h3>
      <div className="content">
        <Button type="primary" size="lg">
          Button
        </Button>
        <Button className="ms-2" type="danger" size="lg">
          Button
        </Button>
        <Button className="ms-2" type="default" size="lg">
          Button
        </Button>
        <Button className="ms-2" type="primary" size="sm">
          Button
        </Button>
        <Button className="ms-2" type="danger" size="sm">
          Button
        </Button>
      </div>
    </>
  )
}

export default CustomButton
