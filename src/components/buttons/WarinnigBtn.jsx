import React from 'react'
import { Button } from 'reactstrap'

const WarinnigBtn = (props) => {
  return (
    <>
        <Button color="warning">
            {props.btnName}
        </Button>
    </>
  )
}

export default WarinnigBtn
