
const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, '../public/img/logo-aaroh.png');
const outputPath = path.join(__dirname, '../public/img/certificate.svg');

try {
    const logoBuffer = fs.readFileSync(logoPath);
    const base64Logo = logoBuffer.toString('base64');
    const logoDataUri = `data:image/png;base64,${base64Logo}`;

    const svgContent = `
<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fdfbf7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f4f1ea;stop-opacity:1" />
    </linearGradient>
    <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
       <path d="M0 40 L40 0 H20 L0 20 M40 40 V20 L20 40" stroke="#eaddcf" stroke-width="1" fill="none"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#grad1)" />
  <rect width="800" height="600" fill="url(#pattern)" fill-opacity="0.3" />
  
  <!-- Border -->
  <rect x="20" y="20" width="760" height="560" fill="none" stroke="#2e3092" stroke-width="2" />
  <rect x="30" y="30" width="740" height="540" fill="none" stroke="#faa61a" stroke-width="4" stroke-dasharray="20,10" />

  <!-- Corner Decor -->
  <path d="M20 120 V20 H120" stroke="#2e3092" stroke-width="8" fill="none"/>
  <path d="M680 20 H780 V120" stroke="#2e3092" stroke-width="8" fill="none"/>
  <path d="M780 480 V580 H680" stroke="#2e3092" stroke-width="8" fill="none"/>
  <path d="M120 580 H20 V480" stroke="#2e3092" stroke-width="8" fill="none"/>

  <!-- Logo (Embedded Base64) -->
  <image href="${logoDataUri}" x="300" y="50" width="200" height="70" />

  <!-- Text Content -->
  <text x="400" y="160" font-family="serif" font-size="28" fill="#faa61a" text-anchor="middle" letter-spacing="4" font-weight="bold" text-transform="uppercase">Certificate of Completion</text>
  
  <text x="400" y="220" font-family="serif" font-size="18" fill="#555" text-anchor="middle" font-style="italic">This is to certify that</text>
  
  <text x="400" y="290" font-family="cursive" font-size="60" fill="#222" text-anchor="middle" font-weight="bold">Student Name</text>
  <line x1="250" y1="300" x2="550" y2="300" stroke="#333" stroke-width="1" />

  <text x="400" y="350" font-family="serif" font-size="18" fill="#555" text-anchor="middle">
     Has successfully completed the Full Stack Web Development Course
  </text>
  <text x="400" y="380" font-family="serif" font-size="18" fill="#555" text-anchor="middle">
     demonstrating excellence in React, Node.js, and Modern Tech Stack.
  </text>

  <!-- Signatures -->
  <line x1="150" y1="500" x2="300" y2="500" stroke="#333" stroke-width="1" />
  <text x="225" y="520" font-family="sans-serif" font-size="14" fill="#333" text-anchor="middle" font-weight="bold">DIRECTOR</text>

  <!-- Gold Seal -->
  <circle cx="400" cy="490" r="40" fill="#faa61a" stroke="#fff" stroke-width="4"/>
  <circle cx="400" cy="490" r="34" fill="none" stroke="#b87200" stroke-width="1"/>
  <text x="400" y="498" font-family="serif" font-size="30" fill="#fff" text-anchor="middle" font-weight="bold">★</text>

  <line x1="500" y1="500" x2="650" y2="500" stroke="#333" stroke-width="1" />
  <text x="575" y="520" font-family="sans-serif" font-size="14" fill="#333" text-anchor="middle" font-weight="bold">EXAM CONTROLLER</text>

</svg>`;

    fs.writeFileSync(outputPath, svgContent);
    console.log('Certificate generated successfully at:', outputPath);

} catch (err) {
    console.error('Error generating certificate:', err);
}
