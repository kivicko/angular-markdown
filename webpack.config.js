const path = require('path');
const fs = require('fs');

// Function to create an index of markdown files
function createMarkdownIndex(directory) {
  const files = fs.readdirSync(directory);
  const markdownFiles = files.filter(file => file.endsWith('.md'));
  
  return markdownFiles.map(file => ({
    filename: file,
    content: fs.readFileSync(path.join(directory, file), 'utf-8')
  }));
}

module.exports = {
  plugins: [
    new (require('webpack')).DefinePlugin({
      __MARKDOWN_FILES__: JSON.stringify(createMarkdownIndex(path.resolve(__dirname, 'src/assets/posts')))
    })
  ]
};
