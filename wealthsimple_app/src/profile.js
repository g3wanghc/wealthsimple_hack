import React from 'react';
import {Nav, Navbar, NavItem, Tabs, Tab, FieldGroup, Checkbox, Radio, Form, FormGroup, FormControl, ControlLabel, Button, Well } from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './navbar.js'

class Profile extends React.Component {
  constructor(props) {
    super(props);  
    this.userLogOut = this.userLogOut.bind(this);
  }

  userLogOut() {
    console.log("userLogout is called");
    this.props.loginHandler(false);
  }

  render() {
    return (
      <div>
        <CustomNavbar loginHandler={this.props.loginHandler} pageHandler={this.props.pageHandler} />
        <div className="container">
            <p style={{
              fontSize: '22px',
              marginTop: '10px',
              marginBottom: '30px',
              marginLeft: '10px',
              fontWeight: 'bold'
            }}>
                Profile
            </p>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Profile">
                <div className="tab-content">
                    <div className="white-box">
                        <h3>Profile</h3>
                        <form>
                            <Form inline>
                                <FormGroup controlId="formControlsFirstName">
                                  <ControlLabel>Name</ControlLabel>{'   '}
                                  <FormControl placeholder="First" />
                                </FormGroup>{'   '}
                                <FormGroup controlId="formControlsMiddleName">
                                  <FormControl placeholder="Middle" />
                                </FormGroup>{'   '}
                                <FormGroup controlId="formControlsLastName">
                                  <FormControl placeholder="Last" />
                                </FormGroup>
                            </Form>

                            <FormGroup controlId="formControlsEmail">
                              <ControlLabel>Email</ControlLabel>
                              <FormControl placeholder="Enter email" />
                            </FormGroup>
                            <FormGroup controlId="formControlsPhoneNumber">
                              <ControlLabel>Phone Number</ControlLabel>
                              <FormControl placeholder="Enter email" />
                            </FormGroup>


                            <Form inline>
                                <FormGroup controlId="formControlsAddress">
                                  <ControlLabel>Residential Address</ControlLabel>{'   '}
                                  <FormControl placeholder="Address" />
                                </FormGroup>{'   '}
                                <FormGroup controlId="formControlsCity">
                                  <FormControl placeholder="City" />
                                </FormGroup>{'   '}
                                <FormGroup controlId="formControlsProvince">
                                  <FormControl componentClass="select" placeholder="Province">
                                    <option value="ontario">Ontario</option>
                                    <option value="quebec">Quebec</option>
                                    <option value="bc">British Columbia</option>
                                  </FormControl>
                                </FormGroup>{'   '}
                                <FormGroup controlId="formControlsPostalCode">
                                  <FormControl placeholder="Postal Code" />
                                </FormGroup>{'   '}
                            </Form>

                            <Checkbox>
                              Mailing Address is the Residential Address
                            </Checkbox>
                            <FormGroup controlId="formControlsOccupation">
                              <ControlLabel>Occupation</ControlLabel>
                              <FormControl placeholder="Enter Occupation" />
                            </FormGroup>
                            <FormGroup controlId="formControlsLanguage">
                              <ControlLabel>Language Preference</ControlLabel>
                              <FormControl componentClass="select" placeholder="English">
                                <option value="english">English</option>
                                <option value="french">Francais</option>
                              </FormControl>
                            </FormGroup>
                            <Button type="submit">Save Changes</Button>
                          </form>
                      </div>
                    </div>
              </Tab>
              <Tab eventKey={2} title="Security">
                <div className="white-box">
                    <h3>Security</h3>
                    <form>
                        <FormGroup controlId="formControlsOldPassword">
                            <ControlLabel>Change password</ControlLabel>
                          <FormControl placeholder="Enter old password" />
                        </FormGroup>
                        <FormGroup controlId="formControlsNewPassword">
                          <FormControl placeholder="Enter new password" />
                        </FormGroup>
                        <FormGroup controlId="formControlsNewPasswordConfirm">
                          <FormControl placeholder="Enter new password again" />
                        </FormGroup>
                        <Button type="submit">Save Changes</Button>
                    </form>
                </div>
              </Tab>
              <Tab eventKey={3} title="Accounts">
                <div className="white-box">
                    <h3>Accounts</h3>
                    <h4>Investment Profile</h4>
                    <p>To change the risk level of your portfolio or how you're invested, please tell us about the change you’d like to make. You may be required to book a call with a Portfolio Manager.</p>
                    <h4>Close account</h4>
                    <p>Please call your Relationship Manager at +1 (855) 255-9038 to close your account.</p>
                </div>
              </Tab>
              <Tab eventKey={4} title="Bank Accounts">
                  <div className="white-box">
                    <h3>Bank Accounts</h3>
                    <strong> RBC ****000</strong>
                    <p>Added Jan 1 2018</p>
                    <Button>Add a bank account</Button>{' '}
                    <Button>Verify a bank document</Button>
                </div>
              </Tab>
            </Tabs>
        </div>
        </div>
    );
  }
}

export default Profile;
