import React from 'react';
import {Nav, Navbar, NavItem, Tabs, Tab, DropdownButton, MenuItem, ButtonToolbar, ToggleButtonGroup, ToggleButton, ListGroup, ListGroupItem, Panel, Well} from 'react-bootstrap';
import Helpers from './helpers.js';
import './custom_style.css';
import CustomNavbar from './navbar.js'

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
      	<div className="container">
			<p style={{
				fontSize: '22px',
				marginTop: '10px',
				marginBottom: '30px'
			}}>
				Activity
			</p>
			<div className="white-box">
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
			</div>

			<div className="white-box">
				<div className="activity-bottom">
				  <Panel id="collapsible-panel-example-2" expanded="True">
		          <Panel.Heading>
		            <Panel.Title toggle>
		              May 30 - Funds Invested (RRSP), Assets Sold (TFSA), Funds Invested (TFSA)
		            </Panel.Title>
		          </Panel.Heading>
		          <Panel.Collapse>
		            <Panel.Body>
		            	<strong className="activity-items-left">Funds Invested (RRSP)</strong>
		            	<strong className="activity-items-right">$473.43</strong>
		              <p className="activity-items-left">Bought VAB (10 shares at $25.06/share)</p>
		              <p className="activity-items-right">$250.60</p>
		              <p className="activity-items-left">Bought XUS (4 shares at $43.91/share)</p>
		              <p className="activity-items-right">$175.64</p>
		              <p className="activity-items-left">Bought ZEF (4 shares at $15.73/share)</p>
		              <p className="activity-items-right">$47.19</p>
		              <strong className="activity-items-left">Assets Sold (TFSA)</strong>
		              <strong className="activity-items-right">$101.60</strong>
		              <p className="activity-items-left">Sold VIG ( shares at $101.60 USD/share)</p>
		              <p className="activity-items-right">$101.60</p>
		              <strong className="activity-items-left">Funds Invested (TFSA)</strong>
		              <strong className="activity-items-right">$4241.28</strong>
		              <p className="activity-items-left">Bought GOOG (4 shares at $1060.32 USD/share)</p>
		              <p className="activity-items-right">$4241.28</p>
		            </Panel.Body>
		          </Panel.Collapse>
		        </Panel>
		        <Panel id="collapsible-panel-example-2" expanded="True">
		          <Panel.Heading>
		            <Panel.Title toggle>
		              May 29 - Funds Invested (TFSA), Funds Invested (TFSA), Assets Sold (TFSA)
		            </Panel.Title>
		          </Panel.Heading>
		          <Panel.Collapse>
		            <Panel.Body>
		            	<strong className="activity-items-left">Funds Invested (TFSA)</strong>
		            	<strong className="activity-items-right">$10,355.68 USD</strong>
		              <p className="activity-items-left">Bought GOOG (9 shares at $1060.32 USD/share)</p>
		              <p className="activity-items-right">$9,542.88 USD</p>
		              <p className="activity-items-left">Bought VIG (6 shares at $101.60 USD/share)</p>
		              <p className="activity-items-right">$175.64</p>
		              <p className="activity-items-left">Bought ZEF (4 shares at $15.73/share)</p>
		              <p className="activity-items-right">$47.19</p>
		              <strong className="activity-items-left">Funds Invested (RRSP)</strong>
		              <strong className="activity-items-right">$600.56</strong>
		              <p className="activity-items-left">Bought XUS (6 shares at $43.91/share)</p>
		              <p className="activity-items-right">$263.46</p>
		              <p className="activity-items-left">Bought BAM.A (5 shares at $51.69/share)</p>
		              <p className="activity-items-right">$258.45</p>
		              <p className="activity-items-left">Bought ZEF (5 shares at $15.73/share)</p>
		              <p className="activity-items-right">$78.65</p>
		              <strong className="activity-items-left">Assets Sold (TFSA)</strong>
		              <strong className="activity-items-right">$800.93</strong>
		              <p className="activity-items-left">Sold XUS (10 shares at $43.91/share)</p>
		              <p className="activity-items-right">$439.10</p>
		              <p className="activity-items-left">Sold BAM.A (7 shares at $51.69/share)</p>
		              <p className="activity-items-right">$361.83</p>
		            </Panel.Body>
		          </Panel.Collapse>
		        </Panel>
				</div>
			</div>
		</div>
  		</div>
    );
  }
}

export default Activity;
