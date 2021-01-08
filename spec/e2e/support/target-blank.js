/**
 * @typedef SimplifiedLink
 *
 * @prop {string} innerText
 * @prop {string} href
 * @prop {string} target
 */

/**
 * @param {import('puppeteer').Page} page
 * @return {Promise<SimplifiedLink[]>}
 */
async function getLinks(page) {
  return await page.$$eval('a', (aTags) => aTags.map((a) => {
    // Get the info we want across the Chrome DevTools Protocol
    return {
      innerText: a.innerText.trim(),
      href: a.href,
      target: a.target,
    };
  }));
}

/**
 * @param {SimplifiedLink} a
 */
function toNotHaveTargetBlank(a) {
  return {
    pass: a.target !== '_blank',
    message: () => `Link "${a.innerText}" to ${a.href} had target=_blank, but it should not have`,
  };
}

export { getLinks, toNotHaveTargetBlank };
