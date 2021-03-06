import webapi from './webapi'
import logo from './img/logo.png'

var _options = {
	webapi,
	goAfterLogin: {
		appName: 'fk-app-portal',
		appParams: {}
	},
	goRegister:{
		appName: 'fk-app-register',
		appParams: {}
	},
	goForgot:{
		appName: 'fk-app-forgot-password',
		appParams: {}
	},
	logo: logo
}


function config(options) {
	if (options) {
		Object.assign(_options, options)
	}
}

config.current = _options

export default config