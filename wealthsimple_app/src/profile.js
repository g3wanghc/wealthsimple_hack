import React from 'react';
import './index.css';
import {Nav, Navbar, NavItem, Tabs, Tab, FieldGroup, Checkbox, Radio, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './Navbar.js'

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
      	<div className="main-content-wrapper">
					<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
					  <Tab eventKey={1} title="Profile">
					  	<div className="tab-content">
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
					  </Tab>
					  <Tab eventKey={2} title="Security">
					    <h3>Security</h3>
					  </Tab>
					  <Tab eventKey={3} title="Accounts">
					    <h3>Accounts</h3>
					  </Tab>
					  <Tab eventKey={4} title="Bank Accounts">
					    <h3>Bank Accounts</h3>
					  </Tab>
					  <Tab eventKey={5} title="Beneficiaries">
					    <h3>Beneficiaries</h3>
					  </Tab>
					</Tabs>
				</div>
  		</div>
    );
  }
}

export default Profile;
