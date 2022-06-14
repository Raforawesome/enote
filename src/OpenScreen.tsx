import type { Component } from 'solid-js';
import { invoke } from '@tauri-apps/api';
import { screen, setScreen } from './index';

import './css/styles.global.css'
import './css/OpenScreen.module.css';


const App: Component = () => {
  return (
    <div>
		<h1 class="center" style="margin-top:55px;">Enota</h1>

		<button onClick={
			() => setScreen("NotesScreen")
		} class="mainbutton center" style="margin-top:40vh;">Go To Notes</button>

		<button onClick={
			() => setScreen("SettingsScreen")
		} class="sidebutton center" style="margin-top:14px;">Settings</button>
    </div>
  );
};


export default App;
