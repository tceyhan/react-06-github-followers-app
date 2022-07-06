import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const CardFollowers = ({follower}) => {
  return (
    <div>
      <Col>
        <Card className="rounded-3 mb-2 bg-war">
        <Card.Img variant="top" src={follower.avatar_url} className="rounded-circle"/>
        <Card.Body>
        <Card.Text>{follower.login}</Card.Text>
        <Button
        target='_blank'
        href={follower.html_url}
        style={{borderRadius:'50px'}}
        variant="primary">VIEW PROFILE</Button>
        </Card.Body>
        </Card>
      </Col>
    </div>
  )
}

export default CardFollowers