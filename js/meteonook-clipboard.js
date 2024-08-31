function processLines() {
    const inputText = document.getElementById('inputText').value;
    const lines = inputText.split('\n');
    const processedLines = lines.map(line => {
        // Remove the leaf emoji lines
        if (line.includes('🍃')) {
            return '';
        }
        // Strip out the beginning if it contains the star emoji and a space
        if (line.startsWith('🌠 ')) {
            return line.replace('🌠 ', '');
        }
        return line;
    }).filter(line => line.trim() !== ''); // Filter out empty lines

    const outputText = processedLines.join('\n');
    document.getElementById('outputText').value = outputText;
}
// Alert the copied text
function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    $.toast({
      message: 'Copied ' + outputText.value.split("\n")[0] + '...',
      class : 'success',
        showIcon: 'clipboard',
      showProgress: 'bottom',
      displayTime: 'auto'
    })
    ;
}
