export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', async (html) => {
        const metaTags = [
            { tag: 'title', content: 'ja' },
            { tag: 'meta', attrs: { name: 'description', content: 'seo-check' } },
            { tag: 'meta', attrs: { property: 'og:title', content: 'ogp seo-check' } },
            { tag: 'meta', attrs: { property: 'og:description', content: 'ogp seo-check' } },
            { tag: 'meta', attrs: { property: 'og:image', content: 'https://ccn-ishii-yusuke.github.io/seo-check/ogp.png' } },
            { tag: 'meta', attrs: { property: 'og:url', content: 'https://ccn-ishii-yusuke.github.io/seo-check/' } },
            { tag: 'meta', attrs: { property: 'og:site_name', content: 'ogp seo-check' } },
            { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
            { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
            { tag: 'meta', attrs: { property: 'twitter:title', content: 'ogp seo-check' } },
            { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } }
        ]

        metaTags.forEach(tag => {
            if (tag.attrs) {
                html.head.push(`<${tag.tag} ${Object.entries(tag.attrs).map(([key, value]) => `${key}="${value}"`).join(' ')} />`)
            } else {
                html.head.push(`<${tag.tag}>${tag.content}</${tag.tag}>`)
            }
        })
    })
})