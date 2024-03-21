// components/Navbar/index.js

import React from "react";

import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink} from "./NavbarElements"

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/Equipments" >
                    EQUIPMENTS
					</NavLink>
					<NavLink to="/InsertMembers" activeStyle>
                    REGISTRATION
					</NavLink>
					<NavLink to="/Members" activeStyle>
                    MEMBERSHIP
					</NavLink>
					<NavLink to="/price" activeStyle>
                    PRICE
					</NavLink>
					<NavLink to="/trainers" activeStyle>
                    TRAINERS
					</NavLink>
					<NavLink to="/updateTrainer" activeStyle>
                    UPDATE TRAINER
					</NavLink>
                    <NavLink to="/allmembers" activeStyle>
                    MEMBERS
					</NavLink>
                    <NavLink to="/insertTrainer" activeStyle>
                    Add Trainer
					</NavLink>
                    
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				
			</Nav>
		</>
	);
};

export default Navbar;
