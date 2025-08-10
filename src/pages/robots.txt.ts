export function get({ site }) {
  const sitemap = 'Sitemap: https://www.thesoulandthemachine.com/sitemap-index.xml';
  const isDevBranch = import.meta.env.DEPLOY_BRANCH === 'development';
  return new Response(
    isDevBranch
      ? `User-agent: *\nDisallow: /\n${sitemap}`
      : `User-agent: *\nAllow: /\n${sitemap}`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}