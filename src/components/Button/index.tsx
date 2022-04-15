import React from 'react'

import { Button } from 'val-design'
import {
  ButtonProps,
  ButtonTypes
} from 'val-design/dist/components/Button/button'

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
      <h3>Button Component</h3>
      <div className="content">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {btnTypes.map((t, i) => (
            <span style={{ padding: '10px' }} key={i}>
              <Button type={t} size="lg">
                {t + ' button'}
              </Button>
            </span>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {btnTypes.map((t, i) => (
            <span style={{ padding: '10px' }} key={i}>
              <Button type={t} size="sm">
                {t + ' button'}
              </Button>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

export default CustomButton
