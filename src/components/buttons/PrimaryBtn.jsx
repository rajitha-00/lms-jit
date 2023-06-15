import React from 'react'
import { Button } from 'reactstrap'

const PrimaryBtn = (props) => {
  return (
    <>
        <Button className='btnForm btnPrimary' type="button"  onClick={props.onClick}>
            {props.btnName}
        </Button>
    </>
  )
}

export default PrimaryBtn
