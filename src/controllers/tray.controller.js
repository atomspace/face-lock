let path = require('path');

let tray = require('../services/tray/tray.service');
let app = require('../services/app.service');


tray.setIcon(path.resolve(__dirname, '../icons/tray-icon.png'));

tray.setTitle('Locking system if user is afk');

tray.setMenu([
	{
		label: 'Exit',
		type: 'normal',
		click () {
			app.quit();
			console.log('End');
		}
	}
]);