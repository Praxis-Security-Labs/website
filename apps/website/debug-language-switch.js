import { handleLanguageSwitch } from './src/utils/language-preference.ts';

// Test the handleLanguageSwitch function
console.log('Testing handleLanguageSwitch function:');

// Test 1: From English homepage to Norwegian
const test1 = handleLanguageSwitch('no', '/');
console.log('EN "/" -> NO:', test1);

// Test 2: From Norwegian homepage to English
const test2 = handleLanguageSwitch('en', '/no');
console.log('NO "/no" -> EN:', test2);

// Test 3: From English pricing to Norwegian
const test3 = handleLanguageSwitch('no', '/pricing');
console.log('EN "/pricing" -> NO:', test3);

// Test 4: From Norwegian pricing to English
const test4 = handleLanguageSwitch('en', '/no/pricing');
console.log('NO "/no/pricing" -> EN:', test4);

// Test 5: From English segment page to Norwegian
const test5 = handleLanguageSwitch('no', '/segments/security-leaders');
console.log('EN "/segments/security-leaders" -> NO:', test5);

// Test 6: From Norwegian segment page to English
const test6 = handleLanguageSwitch('en', '/no/segments/security-leaders');
console.log('NO "/no/segments/security-leaders" -> EN:', test6);
