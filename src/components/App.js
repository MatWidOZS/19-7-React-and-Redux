import React, { Component } from 'react';
import CommentsListContainer from '../containers/CommentsListContainer';
import '../css/App.css';
import DevTools from '../DevTools';

const App = () => {
	return (
		<div className="App">
			<CommentsListContainer />
			<DevTools />
		</div>
	);
};

export default App;