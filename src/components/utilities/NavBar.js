import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./NavBar.css";

import { logoutThunk } from "../../actions";
import LinkButton from "./LinkButton";

class NavBar extends Component {
	render() {
		let loggedInView;
		if (this.props.isLoggedIn) {
			loggedInView = (
				<div>
					<LinkButton className="sign-up" onClick={this.props.logout} to="/">
						Log Out
					</LinkButton>
					<p style={{ float: "right", margin: "12px", fontSize: "14px" }}>
						Logged in as: {this.props.loggedInUser.name}
					</p>
				</div>
			);
		}
		const loggedOutView = (
			<div>
				<Link className="sign-up" to="/signup">
					Sign Up
				</Link>
				<Link className="sign-up" to="/login">
					Log In
				</Link>
			</div>
		);
		return (
			<div className="navbar">
				<Link className="logo" to="/">
					GamerBase
				</Link>
				<Link className="login" to="/forums" style={{ float: "right" }}>
					Forums
				</Link>
				{this.props.isLoggedIn ? loggedInView : loggedOutView}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: !!state.user.loggedInUser.id,
		loggedInUser: state.user.loggedInUser
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logoutThunk())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
