const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'src', 'components');

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.js'));

const replacements = [
  // Backgrounds
  { regex: /bg-slate-950(\/[0-9]+)?/g, replace: 'bg-white$1 dark:bg-slate-950$1' },
  { regex: /bg-slate-900(\/[0-9]+)?/g, replace: 'bg-slate-50$1 dark:bg-slate-900$1' },
  { regex: /bg-slate-800/g, replace: 'bg-slate-200 dark:bg-slate-800' },
  { regex: /bg-midnight/g, replace: 'bg-slate-50 dark:bg-midnight' },
  
  // Text colors
  { regex: /text-white/g, replace: 'text-slate-900 dark:text-white' },
  { regex: /text-slate-300/g, replace: 'text-slate-700 dark:text-slate-300' },
  { regex: /text-slate-400/g, replace: 'text-slate-600 dark:text-slate-400' },
  { regex: /text-slate-500/g, replace: 'text-slate-500 dark:text-slate-400' },
  
  // Primary brand (Cyan)
  { regex: /text-cyan-400/g, replace: 'text-cyan-600 dark:text-cyan-400' },
  { regex: /text-cyan-300/g, replace: 'text-cyan-500 dark:text-cyan-300' },
  { regex: /bg-cyan-400/g, replace: 'bg-cyan-600 dark:bg-cyan-400' },
  { regex: /border-cyan-400/g, replace: 'border-cyan-600 dark:border-cyan-400' },
  { regex: /from-cyan-500/g, replace: 'from-cyan-400 dark:from-cyan-500' },
  { regex: /from-cyan-600/g, replace: 'from-cyan-500 dark:from-cyan-600' },
  { regex: /via-cyan-500/g, replace: 'via-cyan-400 dark:via-cyan-500' },
  { regex: /to-cyan-500/g, replace: 'to-cyan-400 dark:to-cyan-500' },
  
  // Borders
  { regex: /border-slate-800/g, replace: 'border-slate-200 dark:border-slate-800' },
  { regex: /border-slate-700/g, replace: 'border-slate-300 dark:border-slate-700' },
  { regex: /border-slate-900/g, replace: 'border-slate-200 dark:border-slate-900' },
  
  // Inputs (Contact Form)
  { regex: /focus:ring-cyan-500/g, replace: 'focus:ring-cyan-600 dark:focus:ring-cyan-500' },
];

files.forEach(file => {
  if(file === 'ThemeProvider.js' || file === 'ThemeToggle.js') return;
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let initialContent = content;
  
  // We need to avoid double replacing if it's already got dark:
  // So we only replace if it's NOT preceded by dark: or already part of a replaced string.
  // Using a simpler approach: just replace all and then fix double `dark:dark:` and `bg-white dark:bg-white` 
  
  // To be safe, we will just apply to raw classes. It's best to do a careful replacement.
  replacements.forEach(({regex, replace}) => {
    // Only match class names with boundaries to avoid matching inside dark:...
    // Let's do a naive replace first, and then clean up.
    content = content.replace(regex, replace);
  });
  
  // Cleanup duplicates caused by multiple runs or overlaps
  content = content.replace(/dark:dark:/g, 'dark:');
  content = content.replace(/bg-white(\/[0-9]+)? dark:bg-white(\/[0-9]+)? dark:/g, 'bg-white$1 dark:');
  content = content.replace(/text-slate-600 dark:text-slate-600 dark:/g, 'text-slate-600 dark:');
  content = content.replace(/bg-slate-50(\/[0-9]+)? dark:bg-slate-50(\/[0-9]+)? dark:/g, 'bg-slate-50$1 dark:');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
