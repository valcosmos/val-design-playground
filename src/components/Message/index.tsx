import React from 'react'

import { Button, message } from 'val-design'
import { ButtonTypes } from 'val-design/dist/components/Button/button'

const CustomButton = () => {
  const btnTypes: ButtonTypes[] = [
    'default',
    'danger',
    'link',
    'primary',
    'success',
    'warning'
  ]

  return (
    <>
      <h3>Message Component</h3>
      <div className="content">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <Button
            type={'default'}
            style={{ marginLeft: '20px' }}
            onClick={() => {
              message.info('Info Message')
            }}
            size="lg"
          >
            Info Message
          </Button>
          <Button
            type={'success'}
            style={{ marginLeft: '20px' }}
            onClick={() => {
              message.success('Success Message')
            }}
            size="lg"
          >
            Success Message
          </Button>
          <Button
            type={'warning'}
            style={{ marginLeft: '20px' }}
            onClick={() => {
              message.warning('Warning Message')
            }}
            size="lg"
          >
            Warning Message
          </Button>
          <Button
            type={'danger'}
            style={{ marginLeft: '20px' }}
            onClick={() => {
              message.error('Error Message')
            }}
            size="lg"
          >
            Error Message
          </Button>
        </div>
      </div>
    </>
  )
}

export default CustomButton
