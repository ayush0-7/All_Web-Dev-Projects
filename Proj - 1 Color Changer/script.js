const button = document.querySelectorAll('.button');
const body = document.querySelector("body");
button.forEach(ele => {
     ele.addEventListener('click', e => {
    if (e.target.id === 'Green') {
        body.style.backgroundColor = e.target.id;
    }
     if (e.target.id === 'Yellow') {
        body.style.backgroundColor = e.target.id;
    }
     if (e.target.id === 'Red') {
        body.style.backgroundColor = e.target.id;
    }
     if (e.target.id === 'Grey') {
        body.style.backgroundColor = e.target.id;
    }
  });
});