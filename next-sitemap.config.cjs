/* eslint-disable no-undef */
/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line no-undef
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 1,
  autoLastmod: true,
};
