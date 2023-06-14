import React from 'react'
import {  Card,  Col, Row } from 'reactstrap'
import PrimaryBtn from '../components/buttons/PrimaryBtn'
const Dashboard = () => {
  return (
    <>
    <div className="wrapper">
      <div className="innerWrapper">

        <Row>
          <Col >
            <Card body>
              <Row>
                <Col sm="6" md="4">
                  <PrimaryBtn
                    btnName="Students"
                  />
                </Col>
                <Col sm="6" md="4">
                  <PrimaryBtn
                    btnName="Teachers"
                  />
                </Col>
                <Col sm="6" md="4">
                  <PrimaryBtn
                    btnName="Subjects"
                  />
                </Col>
                <Col sm="6" md="4">
                  <PrimaryBtn
                    btnName="Classrooms"
                  />
                </Col>
                <Col sm="6" md="4">
                  <PrimaryBtn
                    btnName="Assign Subjects"
                  />
                </Col>
                <Col sm="6" md="4">
                  <PrimaryBtn
                    btnName="Assign Classes"
                  />
                </Col>
                <Col sm="6" md="4">
                  <PrimaryBtn
                    btnName="Students Reports"
                  />
                </Col>
              </Row>
              
            </Card>
          </Col>
        
        </Row>
      </div>
    </div>
    </>
  )
}

export default Dashboard
