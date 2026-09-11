/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://prototypes.xscriptor.io",
  generateRobotsTxt: true,
  outDir: "./out",
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
}
