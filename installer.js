let path = require('path');

let builder = require('electron-builder');

let Platform = builder.Platform;

const PLATFORM = {
	MAC: Platform.MAC,
	LINUX: Platform.LINUX,
	WINDOWS: Platform.WINDOWS,
	DEFAULT: Platform.current()
};

let projectPath = path.resolve(process.cwd(), '.');
let name = 'Face Lock';
let publisher = 'Atom Space';
let year = new Date().getFullYear();
let id = 'com.atomspace.facelock';

let options = {
	projectDir: projectPath,

	// win: [],
	// mac: [],
	// linux: [],
	config: {
		appId: id,
		productName: name,
		copyright: `Copyright © ${year} ${publisher}`,
		artifactName: '${name}-${version}.${ext}',
		remoteBuild: false,
		files: [
			'src'
		],
		directories: {
			output: 'dist'
		},
		win: {
			// icon: build/icon.ico
			target: ['nsis', 'portable']
		},
		mac: {
			target: 'default',
			type: (process.env.NODE_ENV === 'development') ? 'development' : 'distribution',
			category: 'public.app-category.utilities'

			// icon: build/icon.icns
			// minimumSystemVersion
		},
		linux: {
			executableName: '${productName}',
			category: 'Utility'

			// icon: 'icon32.png'
		},
		nsis: {
			oneClick: false,
			allowElevation: true,
			allowToChangeInstallationDirectory: false,
			deleteAppDataOnUninstall: false,
			runAfterFinish: true,
			createDesktopShortcut: true,
			createStartMenuShortcut: true,
			menuCategory: true,
			shortcutName: '',
			artifactName: '${name}-${version}-x32-x64.${ext}',
			uninstallDisplayName: '${productName} ${version}'

			// installerIcon //relative to the build resources or project directory
			// uninstallerIcon
		},
		portable: {
			requestExecutionLevel: 'user',
			artifactName: '${name}-${version}-portable.${ext}'
		},
		dmg: {
			// icon //Defaults to the application icon (build/icon.icns).
			title: '${productName} ${version}',
			artifactName: '${name}-${version}.${ext}'
		},
		appImage: {
			systemIntegration: 'ask'

			// artifactName
		}
	}

	// readonly effectiveOptionComputed?: (options: any) => Promise<boolean>;
	// readonly prepackaged?: string | null;
};

builder.build(options);

// .then(function (result) {
// 	console.log(result);
// 	return result;
// })
// .catch(function (err) {
// 	console.error(err);
// });