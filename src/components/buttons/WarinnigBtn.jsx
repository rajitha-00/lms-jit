import React from 'react'
import { Button } from 'reactstrap'

const WarinnigBtn = (props) => {
  return (
    <>
        <Button className='btnForm' color="warning">
            {props.btnName}
        </Button>
    </>
  )
}

export default WarinnigBtn
