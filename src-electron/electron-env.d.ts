/// <reference types="vite-plugin-electron/electron-env" />

// used in renderer process, expose in `preload.ts`
interface Window {
  ipcRenderer: import("electron").IpcRenderer;
}
