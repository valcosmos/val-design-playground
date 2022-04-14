import React from 'react'
import { Alert } from 'val-design'

const CustomAlert = () => {
  return (
    <>
      <h3>Alert Component</h3>
      <div className="content col">
        <Alert
          title={'Default alert'}
          closable={false}
          onClose={() => {
            console.log('you can handle some actions here')
          }}
        />
        <Alert title={'Danger alert'} type="danger" />
        <Alert title={'Warning alert'} type="warning" />
        <Alert title={'success alert'} type="success" />
        <hr />
        <Alert title="alert title" description="alert description" />
      </div>
    </>
  )
}

export default CustomAlert
