import React from 'react'
import { Button } from 'reactstrap'

const DangerBtn = (props) => {
  return (
    <>
        <Button color="danger">
            {props.btnName}
        </Button>
    </>
  )
}

export default DangerBtn
