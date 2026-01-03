# Troubleshooting Guide for MC TOOLS Application

## Tailwind CSS Integration Issues

If you encounter issues with Tailwind CSS when running the application, follow these steps:

### Problem
```
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.
```

### Solution

1. **Install the correct packages:**
   ```bash
   npm install @tailwindcss/postcss
   ```

2. **Update your postcss.config.js:**
   ```javascript
   module.exports = {
     plugins: {
       '@tailwindcss/postcss': {},
       autoprefixer: {},
     }
   }
   ```

3. **If the above doesn't work, try this alternative approach:**

   a. Remove existing Tailwind CSS packages:
   ```bash
   npm uninstall tailwindcss postcss autoprefixer @tailwindcss/postcss
   ```

   b. Install compatible versions:
   ```bash
   npm install tailwindcss@3.4.1 postcss@8.4.38 autoprefixer@10.4.19
   ```

   c. Initialize Tailwind CSS:
   ```bash
   npx tailwindcss init -p
   ```

   d. Update your postcss.config.js:
   ```javascript
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     }
   }
   ```

## PrimeNG Issues

If you encounter issues with PrimeNG components:

1. **Ensure all required modules are imported in app-module.ts:**
   ```typescript
   import { ButtonModule } from 'primeng/button';
   import { MenubarModule } from 'primeng/menubar';
   import { CardModule } from 'primeng/card';
   import { CarouselModule } from 'primeng/carousel';
   import { InputTextModule } from 'primeng/inputtext';
   import { FormsModule } from '@angular/forms';
   ```

2. **Add PrimeNG styles to your styles.scss:**
   ```scss
   @import 'primeng/resources/themes/lara-light-blue/theme.css';
   @import 'primeng/resources/primeng.css';
   @import 'primeicons/primeicons.css';
   ```

## TypeScript Errors

If you see TypeScript errors related to missing modules:

1. **Ensure all dependencies are installed:**
   ```bash
   npm install
   ```

2. **Restart the TypeScript server in your IDE**

3. **If using VS Code, press Ctrl+Shift+P and select "TypeScript: Restart TS Server"**

## Development Server Issues

If the development server fails to start:

1. **Clear the npm cache:**
   ```bash
   npm cache clean --force
   ```

2. **Delete node_modules and reinstall:**
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Check Angular CLI version compatibility:**
   ```bash
   ng version
   ```

## Build Issues

If you encounter build errors:

1. **Check for syntax errors in your components**

2. **Verify all imported modules are correctly declared in app-module.ts**

3. **Ensure all used components are properly imported and declared**

## Performance Optimization

To optimize the application for production:

1. **Enable production mode:**
   ```bash
   ng build --prod
   ```

2. **Use Angular's built-in optimization features:**
   - Enable tree shaking
   - Use Ahead-of-Time (AOT) compilation
   - Implement lazy loading for feature modules

## Browser Compatibility

To ensure compatibility across browsers:

1. **Update your browserslist configuration in package.json:**
   ```json
   "browserslist": [
     "> 1%",
     "last 2 versions",
     "not dead"
   ]
   ```

2. **Test the application in multiple browsers**

## Accessibility

To improve accessibility:

1. **Use semantic HTML elements**

2. **Implement proper ARIA attributes**

3. **Ensure sufficient color contrast**

4. **Add keyboard navigation support**

## Security

To enhance application security:

1. **Sanitize user inputs**

2. **Implement Content Security Policy (CSP)**

3. **Use Angular's built-in security features**

4. **Regularly update dependencies**