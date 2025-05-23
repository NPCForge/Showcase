// nuxt.config.ts
export default defineNuxtConfig({
	css: [
		'bootstrap/dist/css/bootstrap.min.css',
		'assets/css/global.css'
	],

	build: {
		transpile: ['bootstrap']
	},

	app: {
		head: {
			meta: [
				{ name: 'google-site-verification', content: '_ZjzhijYBN_hzc38vThTARQFpcCAGoj9vZ7hK4Zosq8' }
			],
			// script: [
			// 	{
			// 		// Inclure le fichier JS Bootstrap
			// 		src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
			// 		type: 'text/javascript',
			// 	},
			// ],
		},
	},

	plugins: [
		{ src: '~/plugins/boostrap.client.ts', mode: 'client' }  // Assurez-vous que le plugin est chargé côté client
	],

	compatibilityDate: '2024-10-05',
	modules: ['@nuxt/icon']
})