document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const submitBtn = document.getElementById('submitBtn');
    const copyBtn = document.getElementById('copyBtn');

    // Function to clean the text by removing various dashes and symbols
    const cleanText = () => {
        const text = inputText.value;
        // This regex targets em dashes (—), en dashes (–), standard hyphens (-),
        // and other common symbols like the lightning bolt (⚡), ellipsis (...),
        // and checkmark (✅). The global flag 'g' ensures all instances are replaced.
        const cleanedText = text.replace(/[\u2013\u2014—–-]|⚡|✅|💥|\.\.\./g, '');
        outputText.value = cleanedText;
    };

    // Event listener for the submit button
    submitBtn.addEventListener('click', cleanText);

    // Event listener for the copy button
    copyBtn.addEventListener('click', () => {
        outputText.select();
        outputText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(outputText.value).then(() => {
            alert('Text copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});