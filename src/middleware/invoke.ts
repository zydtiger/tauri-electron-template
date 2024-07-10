const invoke = window.__TAURI__
  ? (await import("@tauri-apps/api")).invoke
  : window.ipcRenderer.invoke;

export default invoke;
