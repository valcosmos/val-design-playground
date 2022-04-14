import React from 'react'
import { Icon, Tabs } from 'val-design'

const CustomTabs = () => {
  return (
    <>
      <h3>Tabs Component</h3>
      <div className="">
        <h4>Default tab</h4>
        <Tabs>
          <Tabs.Item label={'label one'}>content one</Tabs.Item>
          <Tabs.Item label={'label two'}>content two</Tabs.Item>
          <Tabs.Item label={'label three'}>content three</Tabs.Item>
          <Tabs.Item
            label={
              <>
                <Icon icon={'cannabis'} />
                {'  '}Icon tab
              </>
            }
          >
            Icon tab content
          </Tabs.Item>
          <Tabs.Item disabled label={'disabled tab'}></Tabs.Item>
        </Tabs>
        <hr className='mt-3 mb-3' />
        <h4>Card tab</h4>
        <Tabs type="card">
          <Tabs.Item label={'label one'}>content one</Tabs.Item>
          <Tabs.Item label={'label two'}>content two</Tabs.Item>
          <Tabs.Item label={'label three'}>content three</Tabs.Item>
          <Tabs.Item
            label={
              <>
                <Icon icon={'cannabis'} />
                {'  '}Icon tab
              </>
            }
          >
            Icon tab content
          </Tabs.Item>
          <Tabs.Item disabled label={'disabled tab'}></Tabs.Item>
        </Tabs>
      </div>
    </>
  )
}

export default CustomTabs
