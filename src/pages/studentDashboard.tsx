import { Card, Col, Row } from "antd";

const StudentDashboard = () => {
  return (
    <div>
      <Card />
      <Row className="mt-1 gap-y-2np" gutter={16}  >
        <Col xs={24} sm={12} md={6} lg={6}>
          <Card title="Card title" bordered={true}>
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <Card title="Card title" bordered={true}>
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <Card title="Card title" bordered={true}>
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <Card title="Card title" bordered={true}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default StudentDashboard;