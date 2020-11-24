import {Link, Store} from './store';
import {logger} from '../../logger';
import {parseCard} from './helpers/card';

export const Datacomp: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		inStock: {
			container: '.availinfo b',
			text: ['ihneď k odberu', 'skladom']
		},
		maxPrice: {
			container: 'span[class*="wvat"]'
		},
		outOfStock: [
			{
				container: '.availinfo b',
				text: ['AKTUÁLNE NEDOSTUPNÉ.']
			}
		]
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl:
				'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B081265T5Z&Quantity.1=1',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.co.uk/dp/B081265T5Z/'
		}
	],
	linksBuilder: {
		builder: (docElement, series) => {
			const productElements = docElement.find(
				'#prodlistcont .cnt .out .in .prodbox .hdr .c h2 a[href]'
			);
			const links: Link[] = [];
			for (let i = 0; i < productElements.length; i++) {
				const productElement = productElements.eq(i);
				const asin = productElement.attr().href;

				if (!asin) {
					continue;
				}

				const url = `https://datacomp.sk/${asin}`;
				const titleElement = productElement.first();
				const title = titleElement.text().trim();

				if (!title || !new RegExp(`RTX.*${series}`, 'i').exec(title)) {
					continue;
				}

				const card = parseCard(title);

				if (card) {
					links.push({
						brand: card.brand as any,
						cartUrl: `https://datacomp.sk/${asin}`,
						model: card.model,
						series,
						url
					});
				} else {
					logger.error(`Failed to parse card: ${title}`, {url});
				}
			}

			return links;
		},
		ttl: 300000,
		urls: [
			{
				series: '3080',
				url: [
					'https://datacomp.sk/pc-komponenty-graficke-karty-chip-nvidia-geforce-rtx-rtx-3080_c99862197.html',
					'https://datacomp.sk/pc-komponenty-graficke-karty-chip-nvidia-geforce-rtx-rtx-3080_c99862197.html?page=2'
				]
			}
		]
	},
	name: 'datacomp'
};
