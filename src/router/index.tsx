import type { RouteObject } from 'react-router-dom'
import CustomButton from '@/components/Button'

import Layout from '@/Layout'
import Button from '@/components/Button'
import Alert from '@/components/Alert'
import AutoComplete from '@/components/AutoComplete'
import Icon from '@/components/Icon'
import Input from '@/components/Input'
import Tabs from '@/components/Tabs'
import Upload from '@/components/Upload'

import App from '@/App'

const routesArr = [
  { k: 'button', v: Button },
  { k: 'alert', v: Alert },
  { k: 'autocomplete', v: AutoComplete },
  { k: 'icon', v: Icon },
  { k: 'input', v: Input },
  { k: 'tabs', v: Tabs },
  { k: 'upload', v: Upload }
]

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CustomButton />
      },
      ...routesArr.map((r) => ({ path: `/${r.k}`, element: <r.v /> }))
    ]
  }
]

export default routes
