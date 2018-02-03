import { remote , ipcRenderer} from "electron";

var button = document.createElement('button')
button.textContent = 'Return to old page';
button.addEventListener('click', () => {
  ipcRenderer.send('load-new-page', 'file://' + __dirname + '/app.html');
})
document.body.appendChild(button)
