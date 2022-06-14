#[tauri::command]
pub fn log(s: String) -> Result<(), String> {
	println!("{s}");
	Ok(())
}