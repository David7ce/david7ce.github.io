#!/usr/bin/env node

// Simple script to preview the site locally
// This script temporarily modifies astro.config.ts to use 'static' output
// for preview purposes, then restores it after

/* eslint-env node */
/* global console, process */

import fs from 'fs';
import { spawn } from 'child_process';

// Path to config
const configPath = './astro.config.ts';

// Read current config
const originalConfig = fs.readFileSync(configPath, 'utf8');

// Check if we have a Vercel adapter
const hasVercelAdapter = originalConfig.includes('adapter: vercel()');

if (hasVercelAdapter) {
  console.log('📝 Temporarily modifying config for local preview...');
  
  // Replace with static output for preview
  const modifiedConfig = originalConfig
    .replace(/adapter: vercel\(\),/g, '// adapter: vercel(),')
    .replace(/output: 'server',/g, "output: 'static',");
  
  // Write modified config
  fs.writeFileSync(configPath, modifiedConfig);
  
  console.log('🔄 Building site with static output...');
  
  // Run build command
  const build = spawn('bun', ['run', 'astro', 'build'], { stdio: 'inherit' });
  
  build.on('close', (code) => {
    if (code !== 0) {
      console.error(`❌ Build failed with code ${code}`);
      // Restore original config
      fs.writeFileSync(configPath, originalConfig);
      return;
    }
    
    console.log('🚀 Starting preview server...');
    
    // Now run preview
    spawn('bun', ['run', 'astro', 'preview'], { stdio: 'inherit' });
    
    // Handle Ctrl+C to restore config
    process.on('SIGINT', () => {
      console.log('\n🔄 Restoring original config...');
      fs.writeFileSync(configPath, originalConfig);
      process.exit(0);
    });
  });
  
  // Handle errors in build process
  build.on('error', (err) => {
    console.error(`❌ Error: ${err.message}`);
    // Restore original config
    fs.writeFileSync(configPath, originalConfig);
  });
} else {
  console.log('▶️ Running standard preview...');
  spawn('bun', ['run', 'astro', 'preview'], { stdio: 'inherit' });
}
