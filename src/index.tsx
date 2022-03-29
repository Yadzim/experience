import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

/**
 * --------- assets structures ---------
 * #1 -> using images save structures
 *   ✅ Path Example: "/images/(component-name)/image.any"
 * #2 -> using font-family save structures
 *   ✅ Path Example: "/fonts/(font-name)/fonts files"
 *--------------------------------------
 *
 * --------- components structures ---------
 * #1 -> pages folder structures
 *      ✅ Path example: "/pages/(page-name)/files"
 *      🔔 files:
 *          {
 *       ✅ (page-name).tsx -> main component file
 *       ✅ (page-name).e.tsx -> all styled component
 *       ✅ (page-name).t.ts -> types file
 *          }
 * #2 -> components folder structures
 *      ✅ Path examples :
 *         🏆 "/common" : ushbu folder (barcha page larda foydalanilgan componentalar)ni oz ichiga oladi
 *         🏆 "(page-name)/(component-name)/files"
 *              🔔 files:
 *                      {
 *                   ✅ (component-name).tsx -> main component file
 *                   ✅ (component-name).e.tsx -> all styled component
 *                   ✅ (component-name).t.ts -> types file
 *                      }
 *--------------------------------------
 *
 *--------- total structures ---------
 * #1 -> file nomlarini doimo "kebabCase" dan foydalanib yaratamiz
 * #2 -> componenent export qilinganda "pascalCase" dan foydalanamiz
 * --------------------------------------
 *
 *
 */
