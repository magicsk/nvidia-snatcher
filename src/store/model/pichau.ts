import {Store} from './store';

export const Pichau: Store = {
	backoffStatusCodes: [403, 503],
	labels: {
		inStock: {
			container: '.button-action-to-cart',
			text: ['']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.pichau.com.br/hardware/gabinete/gabinete-cougar-conquer-essence-36962'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-asus-geforce-rtx-3080-tuf-gaming-10gb-gddr6x-320-bit-tuf-rtx3080-10g-gaming'
		},
		{
			brand: 'msi',
			model: 'ventus-3x',
			series: '3080',
			url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-msi-geforce-rtx-3080-ventus-3x-10gb-gddr6x-320-bit-rtx-3080-ventus-3x-10g'
		},
		{
			brand: 'msi',
			model: 'ventus-3x-oc',
			series: '3080',
			url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-msi-geforce-rtx-3080-ventus-3x-10gb-oc-gddr6x-320-bit-rtx-3080-ventus-3x-10g-oc'
		},
		{
			brand: 'msi',
			model: 'gaming-x-trio',
			series: '3080',
			url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-msi-geforce-rtx-3080-gaming-x-trio-10gb-gddr6x-320-bit-rtx-3080-gaming-x-trio-10g'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-zotac-geforce-rtx-3080-trinity-10gb-320-bit-zt-a30800d-10p'
		}
	],
	name: 'pichau',
	waitUntil: 'networkidle0'
};
