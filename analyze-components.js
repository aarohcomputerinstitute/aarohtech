const fs = require('fs');
const path = require('path');

// Directories to analyze
const COMPONENTS_DIR = path.join(__dirname, 'src', 'components');
const APP_DIR = path.join(__dirname, 'src', 'app');

// Key pages to check
const KEY_PAGES = [
    'src/app/page.tsx', // Home
    'src/app/(abouts)/about-aaroh/page.tsx', // About
    'src/app/contact-us/page.tsx', // Contact
    'src/app/blogs/page.tsx', // Blog listing
    'src/app/courses/advance-excel/page.tsx',
    'src/app/courses/ai-automation/page.tsx',
    'src/app/courses/coding-language/page.tsx',
    'src/app/courses/data-analyst/page.tsx',
    'src/app/courses/digital-marketing/page.tsx',
    'src/app/courses/rscit/page.tsx',
    'src/app/courses/tally-prime/page.tsx',
    'src/app/courses/video-editing/page.tsx',
    'src/app/courses/web-development/page.tsx',
];

// Get all component files
function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            arrayOfFiles.push(filePath);
        }
    });

    return arrayOfFiles;
}

// Extract component names from files
function getComponentNames(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const componentNames = [];

    // Match export default function ComponentName
    const defaultExportMatch = content.match(/export\s+default\s+function\s+(\w+)/);
    if (defaultExportMatch) {
        componentNames.push(defaultExportMatch[1]);
    }

    // Match export function ComponentName
    const namedExports = content.matchAll(/export\s+(?:const|function)\s+(\w+)/g);
    for (const match of namedExports) {
        componentNames.push(match[1]);
    }

    return componentNames;
}

// Check if component is used in a file
function isComponentUsedInFile(componentName, filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');

        // Check for import statements
        const importRegex = new RegExp(`import.*${componentName}.*from`, 'g');
        if (importRegex.test(content)) return true;

        // Check for JSX usage
        const jsxRegex = new RegExp(`<${componentName}[\\s/>]`, 'g');
        if (jsxRegex.test(content)) return true;

        return false;
    } catch (error) {
        return false;
    }
}

// Main analysis
console.log('🔍 Analyzing component usage...\n');

const componentFiles = getAllFiles(COMPONENTS_DIR);
const allAppFiles = getAllFiles(APP_DIR);

const componentUsage = new Map();

componentFiles.forEach(componentFile => {
    const relativePath = path.relative(__dirname, componentFile);
    const componentNames = getComponentNames(componentFile);

    componentNames.forEach(componentName => {
        let usageCount = 0;
        const usedIn = [];

        // Check in all app files
        allAppFiles.forEach(appFile => {
            if (isComponentUsedInFile(componentName, appFile)) {
                usageCount++;
                usedIn.push(path.relative(__dirname, appFile));
            }
        });

        // Also check in other component files
        componentFiles.forEach(otherComponentFile => {
            if (otherComponentFile !== componentFile) {
                if (isComponentUsedInFile(componentName, otherComponentFile)) {
                    usageCount++;
                    usedIn.push(path.relative(__dirname, otherComponentFile));
                }
            }
        });

        componentUsage.set(componentName, {
            file: relativePath,
            usageCount,
            usedIn
        });
    });
});

// Separate used and unused components
const unusedComponents = [];
const usedComponents = [];

componentUsage.forEach((data, componentName) => {
    if (data.usageCount === 0) {
        unusedComponents.push({ name: componentName, ...data });
    } else {
        usedComponents.push({ name: componentName, ...data });
    }
});

// Output results
console.log('📊 ANALYSIS RESULTS\n');
console.log('='.repeat(80));
console.log(`\n✅ Used Components: ${usedComponents.length}`);
console.log(`❌ Unused Components: ${unusedComponents.length}\n`);

if (unusedComponents.length > 0) {
    console.log('🗑️  UNUSED COMPONENTS (Safe to remove):\n');
    unusedComponents.forEach(comp => {
        console.log(`  ❌ ${comp.name}`);
        console.log(`     File: ${comp.file}\n`);
    });
}

// Check key pages specifically
console.log('\n' + '='.repeat(80));
console.log('\n📄 KEY PAGES COMPONENT USAGE:\n');

KEY_PAGES.forEach(pagePath => {
    const fullPath = path.join(__dirname, pagePath);
    if (fs.existsSync(fullPath)) {
        console.log(`\n📄 ${pagePath}:`);
        const content = fs.readFileSync(fullPath, 'utf-8');

        // Extract imports
        const imports = content.match(/import\s+.*\s+from\s+['"].*['"]/g) || [];
        const componentImports = imports.filter(imp => imp.includes('components'));

        if (componentImports.length > 0) {
            componentImports.forEach(imp => {
                console.log(`  ✓ ${imp}`);
            });
        } else {
            console.log('  ⚠️  No component imports found');
        }
    }
});

// Save detailed report
const report = {
    summary: {
        totalComponents: componentUsage.size,
        usedComponents: usedComponents.length,
        unusedComponents: unusedComponents.length,
        analysisDate: new Date().toISOString()
    },
    unusedComponents: unusedComponents.map(c => ({
        name: c.name,
        file: c.file
    })),
    usedComponents: usedComponents.map(c => ({
        name: c.name,
        file: c.file,
        usageCount: c.usageCount,
        usedIn: c.usedIn.slice(0, 5) // First 5 usages
    }))
};

fs.writeFileSync(
    path.join(__dirname, 'component-analysis-report.json'),
    JSON.stringify(report, null, 2)
);

console.log('\n' + '='.repeat(80));
console.log('\n✅ Detailed report saved to: component-analysis-report.json\n');
