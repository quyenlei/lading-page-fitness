import { getBaseUrl } from '@/lib/fetcher/base-url'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api'],
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  }
}