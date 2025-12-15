/**
 * CDN URL Generator for local images
 * Uses jsDelivr CDN to cache and serve images globally
 * jsDelivr is a free, fast CDN backed by Cloudflare
 */

export function getCdnImageUrl(imagePath: string): string {
  // If already a full CDN URL, return as-is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  // Use jsDelivr CDN to serve GitHub-hosted images
  // Replace with your GitHub username/repo
  const cdnBaseUrl = 'https://cdn.jsdelivr.net/gh/Aloneking789/garun-final-website@main';
  
  // For deployed images, you can also use your site URL
  const deploymentUrl = 'https://garuntechnologies.com';
  
  // Return jsDelivr CDN URL (works even before deployment)
  const imageName = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${cdnBaseUrl}/public/${imageName}`;
}

/**
 * Alternative: If deployed, use your site's CDN-cached URL
 * Cloudflare Pages automatically caches images
 */
export function getLocalImageUrl(imagePath: string): string {
  // Direct local path (Cloudflare will cache automatically)
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
}
