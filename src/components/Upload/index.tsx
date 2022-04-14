import React, { ChangeEvent, useState } from 'react'

import { Button, Icon, Input, Upload } from 'val-design'
import { UploadFile } from 'val-design/dist/components/Upload/upload'

const CustomUpload = () => {
  const [action, setAction] = useState(
    'https://run.mocky.io/v3/f58d4544-a9d0-44ad-b9f8-ce2ddf48a1ba'
  )
  const defaultList: UploadFile[] = [
    {
      uid: 'aaaa',
      name: 'image.png',
      status: 'success',
      size: 1024
    },
    {
      uid: 'bbbb',
      name: 'image1.png',
      status: 'ready',
      size: 1024
    },
    {
      uid: 'cccc',
      name: 'image2.png',
      status: 'uploading',
      size: 1024,
      percent: 80
    },
    {
      uid: 'ffff',
      name: 'image3.png',
      status: 'error',
      size: 1024
    }
  ]
  return (
    <>
      <h3>Upload Component</h3>
      <div className="content col">
        <p>
          <strong>Action: </strong>
          {action}
        </p>
        <p>
          This link may report an error, if you have an excuse to support
          uploading pictures, you can also enter it yourself.
        </p>
        <p>
          这个接口可能会出现跨域的错误，如果您有支持图片上传的借口，也可以在下方输入。
        </p>
        <Input
          value={action}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setAction(e.target.value)
          }}
        ></Input>

        <h4>Button upload</h4>
        <Upload
          defaultFileList={defaultList}
          multiple
          name="file"
          action={action}
        >
          <Button>
            <Icon icon={'upload'} /> Upload
          </Button>
        </Upload>

        <hr />

        <h4>Drag upload</h4>
        <Upload
          name="file"
          defaultFileList={defaultList}
          action={action}
          drag
          multiple
        >
          <Icon icon={'plus'} size={'3x'} theme="secondary" />
          <p className="mt-2">Drag / Click</p>
        </Upload>
      </div>
    </>
  )
}

export default CustomUpload
