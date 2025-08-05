import genImageUrl from './genImageUrl';

export default function generateRSS(posts, dataset) {
	const baseUrl =
		dataset === 'development' ? 'https://staging.harrykelleher.com' : 'https://harrykelleher.com';

	const items = posts
		.map(
			(post) => `
    <item>
      <title>${escapeXML(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.feature}]]></description>
      ${
				post.imageUrl
					? `<enclosure url="${genImageUrl(
							post.imageUrl,
							dataset,
							'?fit=max'
					  )}" type="image/jpeg" length="0" />`
					: ''
			}
    </item>
  `
		)
		.join('');

	return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Harry Kelleher's Blog</title>
      <link>${baseUrl}/blog</link>
      <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
      <description>Latest Posts from Harry Kelleher</description>
      <language>en-us</language>
      ${items}
    </channel>
  </rss>`;
}

function escapeXML(str: string) {
	return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
