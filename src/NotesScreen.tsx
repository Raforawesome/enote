import type { Component } from 'solid-js';
import { invoke } from '@tauri-apps/api';

// import './css/styles.global.css'
import './css/NotesScreen.module.css';


const App: Component = () => {
	return (
	  <div>
		<button style={
			"background-color: transparent;border:none;color:#FFFFFF;font-size:large;margin:1vh 0 0 1vh;font-weight:700;"
		}>{"<"} Back</button>

		<h1>Notes</h1>
		<hr/>
		<textarea />
		<div class="sidebar">
			<p>test</p>
		</div>
	  </div>
	);
};
  
  
export default App;