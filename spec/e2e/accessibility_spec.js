import { AxePuppeteer } from '@axe-core/puppeteer';
import { toHaveNoViolations } from 'jest-axe';
import { page, goto } from './support/browser';
import { getLinks, toNotHaveTargetBlank } from './support/target-blank';

expect.extend(toHaveNoViolations);
expect.extend({ toNotHaveTargetBlank });

const TEST_TIMEOUT_MS = 10000;

/** @type {RegExp[]} */
const EXCLUDE_PATTERNS = [
  /\.pdf$/, // Puppeteer Chromium cannot preview PDF files
  /admin/,
];

describe('accessibility', () => {
  const paths = global.allURLs
    .map((url) => new URL(url).pathname)
    .filter((path) => !EXCLUDE_PATTERNS.some((pattern) => pattern.test(path)));

  /** @type {Record<string, Partial<import('puppeteer').Viewport>>} */
  const viewports = {
    small: { width: 800, height: 600 },
    large: { width: 1280, height: 800 },
  };

  for (const [label, viewport] of Object.entries(viewports)) {
    describe(`${label} viewport`, () => {
      /** @type {import('puppeteer').Viewport} */
      let originalViewport;

      beforeAll(async () => {
        originalViewport = page.viewport();
        await page.setViewport(viewport);
      });

      afterAll(async () => {
        await page.setViewport(originalViewport);
      });

      test.each(paths)(
        '%s',
        async (path) => {
          await goto(path);
          const results = await new AxePuppeteer(page)
            .disableRules('frame-tested')
            .exclude('iframe')
            .exclude('.footer-nav') // See: LG-4038 (TODO: Remove with implementation of LG-4038)
            .analyze();
          expect(results).toHaveNoViolations();

          const links = await getLinks(page);
          links.forEach((a) => {
            expect(a).toNotHaveTargetBlank();
          });
        },
        TEST_TIMEOUT_MS,
      );
    });
  }
});
