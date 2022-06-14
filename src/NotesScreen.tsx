import type { Component } from 'solid-js';
import { invoke } from '@tauri-apps/api';

import './css/styles.global.css'
import './css/NotesScreen.module.css';


const App: Component = () => {
	return (
	  <div>
		<h1 class="center">Notes</h1>
		<hr/>
		<textarea />
	  </div>
	);
};
  
  
export default App;