import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { Icon } from 'val-design'

const CustomIcon = () => {
  const icons: IconProp[] = [
    'address-card',
    'apple-whole',
    'anchor',
    'anchor-circle-check',
    'anchor-circle-exclamation',
    'anchor-circle-xmark',
    'anchor-lock',
    'angle-down',
    'angle-left',
    'angle-up',
    'angles-down',
    'angles-left',
    'archway',
    'bahai',
    'bell-slash',
    'book',
    'bell',
    'bomb',
    'bowl-rice',
    'broom',
    'bug-slash',
    'cannabis'
  ]
  return (
    <>
      <h3>Icon Component</h3>

      <div className="content col">
        <a
          href="https://fontawesome.com/v6/icons?m=free&s=solid"
          target={'_blank'}
        >
          ==> https://fontawesome.com/v6/icons?m=free&s=solid
        </a>
        <p className='mt-2'>
          The icons of this component library are based on the{' '}
          <strong>fontawesome</strong> icon library The secondary package of ,
          the supported icons can be obtained according to the above link
        </p>
        <p>
          本组件库的图标是基于<strong>fontawesome</strong>图标库
          的二次封装，所支持的图标，可根据以上面链接获取
        </p>
        <div className="icon">
          {icons.map((item, index) => (
            <div key={index}>
              <Icon icon={item} size="2x" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CustomIcon
