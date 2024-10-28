document.getElementById('textArea').addEventListener('input', updateCharCount);

function updateCharCount() {
    const textArea = document.getElementById('textArea');
    const charCount = document.getElementById('charCount');
    charCount.innerText = `Caracteres: ${textArea.value.length}`;
}
