
function openGift() {
  document.body.classList.add('fade-out');
  setTimeout(() => window.location.href = "birthday.html", 1000);
}

function goNext() {
  document.body.classList.add('fade-out');
  setTimeout(() => window.location.href = "final.html", 1000);
}

window.onload = () => {
  document.body.classList.add('fade');
};
window.onload = () => {
  document.body.classList.add('fade');
  typeLinesSequentially();
};

function typeLinesSequentially() {
  const lines = document.querySelectorAll('.type-line');
  let current = 0;

  function typeLine(line, index, callback) {
    const text = line.dataset.text;
    let i = 0;
    const interval = setInterval(() => {
      line.textContent += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 40);
  }

  function next() {
    if (current < lines.length) {
      typeLine(lines[current], current, () => {
        current++;
        next();
      });
    }
  }

  next();
}
window.onload = () => {
  document.body.classList.add('fade');
  typeLinesSequentially();
};

function typeLinesSequentially() {
  const lines = document.querySelectorAll('.type-line');
  let current = 0;

  function typeLine(line, callback) {
    const text = line.dataset.text;
    let i = 0;
    const interval = setInterval(() => {
      line.textContent += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 40);
  }

  function next() {
    if (current < lines.length) {
      const line = lines[current];
      typeLine(line, () => {
        current++;
        next();
      });
    } else {
      document.querySelector('.bottom-button').style.display = 'block';
    }
  }

  next();
}
