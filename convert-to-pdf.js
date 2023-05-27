const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sourceFolder = process.env.in-1;
const outputFolder = process.env.out-1;

function convertMarkdownToPDF(markdownPath, outputPath) {
  const command = `pandoc ${markdownPath} -o ${outputPath}`;
  execSync(command);
}

function convertMarkdownFiles() {
  fs.readdirSync(sourceFolder).forEach((file) => {
    const extension = path.extname(file);
    if (extension === '.md' || extension === '.markdown') {
      const markdownPath = path.join(sourceFolder, file);
      const pdfName = path.basename(file, extension) + '.pdf';
      const outputPath = path.join(outputFolder, pdfName);
      convertMarkdownToPDF(markdownPath, outputPath);
    }
  });
}

convertMarkdownFiles();
