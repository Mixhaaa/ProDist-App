// Copies the static web app into www/, the folder Capacitor packages into the APK.
import { cpSync, rmSync, mkdirSync } from 'node:fs';

const FILES = ['index.html', 'manifest.webmanifest', 'sw.js', 'icons', 'vendor'];

rmSync('www', { recursive: true, force: true });
mkdirSync('www');
for (const f of FILES) cpSync(f, `www/${f}`, { recursive: true });
console.log(`www/ ready (${FILES.join(', ')})`);
