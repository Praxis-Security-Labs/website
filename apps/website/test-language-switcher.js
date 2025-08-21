import { chromium } from 'playwright';

async function testLanguageSwitcher() {
  console.log('🚀 Starting language switcher test...');

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // Test 1: Load English homepage
    console.log('📄 Loading English homepage...');
    await page.goto('http://localhost:4321/');
    await page.waitForLoadState('networkidle');

    const title = await page.title();
    console.log(`✅ English homepage loaded: ${title}`);

    // Test 2: Look for language switcher
    console.log('🔍 Looking for language switcher...');
    const languageSwitcher = await page
      .locator(
        '[data-testid="language-switcher"], .language-switcher, button:has-text("EN"), button:has-text("NO")'
      )
      .first();

    if (await languageSwitcher.isVisible()) {
      console.log('✅ Language switcher found');

      // Check what the current language detection is showing
      const currentPathBefore = page.url();
      console.log(`📍 Current URL before switch: ${currentPathBefore}`);

      // Test 3: Click language switcher to go to Norwegian
      console.log('🔄 Switching to Norwegian...');
      await languageSwitcher.click();

      // Wait a bit for any navigation or state changes
      await page.waitForTimeout(1000);
      await page.waitForLoadState('networkidle');

      // Check if we're on Norwegian page
      const currentUrl = page.url();
      console.log(`📍 Current URL after switch: ${currentUrl}`);

      if (currentUrl.includes('/no')) {
        console.log('✅ Successfully switched to Norwegian');

        // Test 4: Try going to pricing page in Norwegian
        console.log('📄 Testing Norwegian pricing page...');
        await page.goto('http://localhost:4321/no/pricing');
        await page.waitForLoadState('networkidle');

        const pricingTitle = await page.title();
        console.log(`✅ Norwegian pricing page loaded: ${pricingTitle}`);

        // Test 5: Switch back to English from pricing page
        console.log('🔄 Switching back to English from pricing...');
        const englishSwitcher = await page
          .locator(
            '[data-testid="language-switcher"], .language-switcher, button:has-text("EN"), button:has-text("NO")'
          )
          .first();
        await englishSwitcher.click();
        await page.waitForLoadState('networkidle');

        const finalUrl = page.url();
        console.log(`📍 Final URL after switch: ${finalUrl}`);

        if (finalUrl === 'http://localhost:4321/pricing') {
          console.log('✅ Successfully switched back to English pricing');
        } else {
          console.log(
            '❌ Language switch from Norwegian pricing may have issues'
          );
        }
      } else {
        console.log(
          '❌ Language switch may not be working - still on English URL'
        );
      }
    } else {
      console.log('❌ Language switcher not found');

      // Check what's actually in the page
      console.log('🔍 Checking page content for navigation...');
      const nav = await page.locator('nav, header').first();
      if (await nav.isVisible()) {
        const navContent = await nav.innerText();
        console.log(
          'Navigation content:',
          navContent.substring(0, 200) + '...'
        );
      }
    }

    // Test 6: Direct navigation test
    console.log('🔗 Testing direct navigation to Norwegian pages...');
    await page.goto('http://localhost:4321/no/');
    await page.waitForLoadState('networkidle');

    const noTitle = await page.title();
    console.log(`✅ Direct Norwegian homepage: ${noTitle}`);

    await page.goto('http://localhost:4321/no/segments/security-leaders');
    await page.waitForLoadState('networkidle');

    const segmentTitle = await page.title();
    console.log(`✅ Norwegian segment page: ${segmentTitle}`);
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    console.log(
      '🔚 Test completed. Browser will stay open for manual inspection...'
    );
    // Keep browser open for manual inspection
    // await browser.close();
  }
}

testLanguageSwitcher();
