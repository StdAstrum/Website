const writeText = document.getElementById('write-text');
const output = document.getElementById('output');
const speed = 200;

let i = 0

function typeWriter() {
  if (i < writeText.textContent.length) {
    output.textContent += writeText.textContent.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();