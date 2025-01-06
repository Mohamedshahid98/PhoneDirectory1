import { LaptopOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import coinSrc from "../assets/coin.svg";
import imgSrc from "../assets/image.png";
import "../css/dashboard.css"; // Import the external CSS file

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="main-content">
        {/* Header Section */}
        <div className="header">
          <div className="header-text-div">
            <div>
              <span className="date">September 4, 2023</span>
            </div>
            <br />
            <h1 className="welcome-text">Welcome back, John!</h1>
            <p className="sub-text">
              Always stay updated in your student portal
            </p>
          </div>
          <div className="header-img-div">
            <img src={imgSrc} alt="My SVG" height="200" />
          </div>
        </div>

        <div className="cards-section">
          <div className="finance-section">
            <h4>Finanace</h4>
            <Row gutter={16}>
              <Col span={8}>  
                <Card
                  bordered={false}
                  // title={<img src={coinSrc} width="95%" alt="coin" />}
                >
                  <div className="amount">
                    <img src={coinSrc} width="95%" height="55vh" alt="coin" />
                    <span>$10000</span>
                    <p>Total Payable</p>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  bordered={false}
                  // title={<img src={coinSrc} width="95%" alt="coin" />}
                >
                  <div className="amount">
                    <img src={coinSrc} width="95%" height="55vh" alt="coin" />
                    <span>$10000</span>
                    <p>Total Payable</p>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  bordered={false}
                  // title={<img src={coinSrc} width="95%" alt="coin" />}
                >
                  <div className="amount">
                    <img src={coinSrc} width="95%" height="55vh" alt="coin" />
                    <span>$10000</span>
                    <p>Total Payable</p>
                  </div>
                </Card>
              </Col>
            </Row>
            <br />
            <div>
              <h4>Enrolled Courses</h4>
              <Row gutter={10}>
                <Col span={12}>
                  <Card
                    bordered={false}
                    className="small-card"
                    bodyStyle={{
                      padding: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h3 className="card-title">
                        Object Oriented Programming
                      </h3>
                      <Button type="primary" className="view-button">
                        View
                      </Button>
                    </div>
                    <div className="icon-container">
                      <LaptopOutlined
                        style={{ fontSize: "48px", color: "#d1c4e9" }}
                      />
                    </div>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    bordered={false}
                    className="small-card"
                    bodyStyle={{
                      padding: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h3 className="card-title">
                        Object Oriented Programming
                      </h3>
                      <Button type="primary" className="view-button">
                        View
                      </Button>
                    </div>
                    <div className="icon-container">
                      <LaptopOutlined
                        style={{ fontSize: "48px", color: "#d1c4e9" }}
                      />
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>

          <div className="course-intructors">
            <h4>Course intructors</h4>
            <div className="avtar-main-div">
              <div className="avtar-div"></div>
              <div className="avtar-div"></div>
              <div className="avtar-div"></div>
            </div>
            <div>
              <h4>Daily notice</h4>
            </div>
            <Card>
              <div>
                <h4>Prelim payment due</h4>
                <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h4>Exam schedule</h4>
                <p>
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
