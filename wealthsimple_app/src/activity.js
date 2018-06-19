import React from 'react';
import './index.css';
import {Nav, Navbar, NavItem, Tabs, Tab, DropdownButton, MenuItem, ButtonToolbar, ToggleButtonGroup, ToggleButton, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './Navbar.js'

class Activity extends React.Component {
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
					<h3>Activity</h3>
					<div className="activity-top">
						<div className="item-space">
							<DropdownButton
					      title="Date"
					      id="activity-date-dropdown"
					    >
					      <MenuItem eventKey="1">All time</MenuItem>
					      <MenuItem eventKey="2">Past month</MenuItem>
					      <MenuItem eventKey="3">Past year</MenuItem>
					    </DropdownButton>
				    </div>
				    <div className="item-space">
					    <ButtonToolbar>
						    <ToggleButtonGroup type="checkbox">
						      <ToggleButton value={1}>All accounts</ToggleButton>
						      <ToggleButton value={2}>TFSA</ToggleButton>
						    </ToggleButtonGroup>
						  </ButtonToolbar>
					  </div>
					  <div className="item-space">
						  <ButtonToolbar>
						    <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
						      <ToggleButton value={1}>All activities</ToggleButton>
						      <ToggleButton value={2}>Deposits</ToggleButton>
						      <ToggleButton value={3}>Investments</ToggleButton>
						      <ToggleButton value={4}>Sales</ToggleButton>
						      <ToggleButton value={5}>Dividends and interest</ToggleButton>
						      <ToggleButton value={6}>Fees and reimbursements</ToggleButton>
						      <ToggleButton value={7}>Withdrawals</ToggleButton>
						      <ToggleButton value={8}>Corrections</ToggleButton>
						    </ToggleButtonGroup>
						  </ButtonToolbar>
						</div>
					</div>

					<div className="activity-bottom">
						<Panel id="collapsible-panel-example-2">
		          <Panel.Heading>
		            <Panel.Title toggle>
		              June 01, 2018 - Invested Cash
		            </Panel.Title>
		          </Panel.Heading>
		          <Panel.Collapse>
		            <Panel.Body>
		              <p>Bought AAA (0.0001 shares at $10.00/share)</p>
		              <p>Bought BBB (0.0001 shares at $10.00/share)</p>
		            </Panel.Body>
		          </Panel.Collapse>
		        </Panel>
					</div>
				</div>
  		</div>
    );
  }
}

export default Activity;
