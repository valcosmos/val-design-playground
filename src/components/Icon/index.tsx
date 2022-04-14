import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { Icon } from 'val-design'
import styles from './index.module.scss'

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
      <a
        href="https://fontawesome.com/v6/icons?m=free&s=solid"
        target={'_blank'}
      >
        https://fontawesome.com/v6/icons?m=free&s=solid
      </a>
      <div className={styles.icons + ' content'}>
        {icons.map((item) => (
          <div>
            <Icon icon={item} />
          </div>
        ))}
      </div>
    </>
  )
}

export default CustomIcon
