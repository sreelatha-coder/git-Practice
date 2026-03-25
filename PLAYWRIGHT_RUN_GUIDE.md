# Playwright Configuration for Flipkart Tests

This is a recommended configuration for running the Flipkart test scripts.

## Installation

```bash
npm install -D @playwright/test
```

## Running Tests

### Basic Commands
```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test flipkart-quick-add-cart.spec.js

# Run with grep pattern
npx playwright test --grep "Dell Laptop"

# Run in headed mode (see browser)
npx playwright test --headed

# Run in debug mode
npx playwright test --debug

# Run with UI mode
npx playwright test --ui

# Run single test with verbose output
npx playwright test flipkart-quick-add-cart.spec.js --verbose
```

### Advanced Commands
```bash
# Generate test report
npx playwright test --reporter=html

# Run tests in specific browsers
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Update snapshots
npx playwright test --update-snapshots

# Run tests in parallel
npx playwright test --workers=4

# Run tests sequentially
npx playwright test --workers=1
```

## Test Selection Guide

| Script | Use Case | Execution Time |
|--------|----------|-----------------|
| `flipkart-quick-add-cart.spec.js` | Quick automation demo | ~15-20 seconds |
| `flipkart-add-to-cart.spec.js` | Standard testing | ~30-40 seconds |
| `flipkart-add-to-cart-detailed.spec.js` | Production use, verbose | ~35-45 seconds |
| `flipkart-with-utils.spec.js` | Maintainable codebase | ~30-40 seconds |

## Environment Variables

Create a `.env` file (optional):
```env
PLAYWRIGHT_TIMEOUT=30000
PLAYWRIGHT_HEADLESS=true
```

## CI/CD Integration

### GitHub Actions Example
```yaml
name: Flipkart Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npx playwright install
      - run: npm test
```

### Package.json Scripts
```json
{
  "scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "test:debug": "playwright test --debug",
    "test:ui": "playwright test --ui",
    "test:flipkart": "playwright test tests/flipkart-*.spec.js",
    "test:quick": "playwright test flipkart-quick-add-cart.spec.js",
    "test:report": "playwright test --reporter=html && npx playwright show-report"
  }
}
```

## Expected Output

### Successful Test Run
```
Running 1 test using 1 worker

  1) tests/flipkart-quick-add-cart.spec.js:1:1 › Flipkart: Add Dell Laptop to Cart
    ✓ [chromium] › tests/flipkart-quick-add-cart.spec.js (2.5s)

Running 1 test using 1 worker
  Author: Added 1 item to cart - Dell Laptop product successfully added.

1 passed (3.5s)
```

## Troubleshooting

### Issue: "Timeout waiting for selector"
```bash
# Increase global timeout in test
await page.waitForSelector(selector, { timeout: 15000 });

# Or increase default in runner
npx playwright test --timeout=60000
```

### Issue: "Browser not found"
```bash
# Install browsers
npx playwright install
```

### Issue: "Cannot find module"
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npx playwright install
```

## Performance Tips

1. **Run in parallel:** `npx playwright test --workers=4`
2. **Use quick script for CI:** Use `flipkart-quick-add-cart.spec.js`
3. **Skip headed mode in CI:** `npx playwright test` (no `--headed`)
4. **Cache dependencies in CI:** Use GitHub Actions caching

## Browser Options

Test on multiple browsers:
```bash
# Chromium (default)
npx playwright test --project=chromium

# Firefox
npx playwright test --project=firefox

# Webkit (Safari)
npx playwright test --project=webkit

# All browsers
npx playwright test
```

## Report Generation

```bash
# Generate HTML report
npx playwright test --reporter=html

# View report
npx playwright show-report

# JSON report
npx playwright test --reporter=json --reporter-output=results.json

# JUnit report (for CI tools)
npx playwright test --reporter=junit
```

## Dependencies

Ensure your `package.json` has:
```json
{
  "devDependencies": {
    "@playwright/test": "latest"
  }
}
```

## System Requirements

- Node.js 16+
- 100MB disk space for browser downloads
- Internet connection
- Modern desktop/laptop

## Maintenance

### Update Playwright
```bash
npm update @playwright/test
npx playwright install
```

### Clean Up
```bash
# Remove test artifacts
rm -rf test-results/ playwright-report/

# Only keep test files
npx playwright test --clean
```

## Success Criteria

✅ Test passes when:
1. Flipkart homepage loads
2. Search results appear for "Dell laptops"
3. First product opens successfully
4. Product details are visible
5. Buy button is clickable
6. Cart page is accessible

---

**Last Updated:** February 6, 2026
**Status:** Ready for Production Use ✅
