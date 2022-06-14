/* @refresh reload */
import { createSignal } from 'solid-js';
import { Dynamic, render } from 'solid-js/web';

import './index.css';
import OpenScreen from './OpenScreen';
import NotesScreen from './NotesScreen';
import { invoke } from '@tauri-apps/api/tauri';


let screens = {
	"OpenScreen": OpenScreen,
	"NotesScreen": NotesScreen
}
export const [screen, setScreen] = createSignal("OpenScreen");


// Settings
document.addEventListener("contextmenu", event => event.preventDefault());


render(() => <NotesScreen />, document.getElementById('root') as HTMLElement);
// @ts-ignore
// render(() => <Dynamic component={screens[screen()]} />, document.getElementById('root') as HTMLElement);

// setInterval(() => {
// 	// @ts-ignore
// 	invoke("log", { s: `The current screen is ${getState("screen")}.` })
// }, 1000)