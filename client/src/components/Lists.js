import React from 'react';
import { connect } from 'react-redux';

const Lists = (props)=> {

	const list = props.lists.map((list)=>{
		return (
			<li className="list-group-item" key={list}>
				<ion-icon name="share-alt"></ion-icon> &ensp; {list}
			</li>
		);
	});

	return (
		<div className="to-do-list">
			<h3 className="title">My List :</h3>
			<ul className="list-group">
				{list}
			</ul>
		</div>	
	);
}

function mapStateToProps(state) {
	return({
		lists: state.lists
	});
}

export default connect(mapStateToProps)(Lists);