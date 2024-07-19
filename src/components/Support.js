import React from "react";
import { Container, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import styles from "../Styles/Support.module.css";
const Support = () => {
  return (
    <div className={`${styles.supportCase} p-3 text-white`}>
      <Container>
        <Row>
          <Col>
            <p>
              <strong>Technical Support Departments</strong>
            </p>
            <p>
              If you have a specific technical issue or need assistance with a
              particular service, please reach out to the appropriate department
              below:
            </p>
            <ol>
              <li>Website Support</li>
              <ul>
                <li>Email: website-support@companyname.com</li>
                <li>Phone: 1-888-XXX-XXXX</li>
              </ul>
              <li>Software Support</li>
              <ul>
                <li>Email: software-support@companyname.com</li>
                <li>Phone: 1-888-XXX-XXXX</li>
              </ul>
              <li>Hardware Support</li>
              <ul>
                <li>Email: hardware-support@companyname.com</li>
                <li>Phone: 1-888-XXX-XXXX</li>
              </ul>
              <li>Network Support</li>
              <ul>
                <li>Email: network-support@companyname.com</li>
                <li>Phone: 1-888-XXX-XXXX</li>
              </ul>
              <li>Security Concerns</li>
              <ul>
                <li>Email: security@companyname.com</li>
                <li>Phone: 1-888-XXX-XXXX</li>
              </ul>
            </ol>
            <p>
              <strong>General Support</strong>
            </p>
            <p>
              For general inquiries and assistance, please contact our support
              team at:
            </p>
            <p>Email: support@companyname.com</p>
            <p>Phone: 1-800-XXX-XXXX</p>
            <hr />
          </Col>
          <Col className="p-3">
            <p>
              Please provide as much detail as possible when contacting us,
              including your name, contact information, and a description of the
              issue you're experiencing. Our team will work diligently to
              provide you with the assistance you need in a timely manner.
            </p>
            <p>
              Thank you for choosing our services. We appreciate your business
              and look forward to resolving any technical issues you may
              encounter.
            </p>
            <hr />
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Stack gap={2}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                  <Form.Label>Department</Form.Label>
                  <Form.Control type="text" placeholder="Department" />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="firstname.lastname@royaltech.com"
                  />
                </Stack>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Detailed message of the issue</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="success">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Support;
