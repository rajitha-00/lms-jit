import React from 'react'
import { Button } from 'reactstrap'

const PrimaryBtn = (props) => {
  return (
    <>
        <Button className='btnPrimary'>
            {props.btnName}
        </Button>
    </>
  )
}

export default PrimaryBtn
