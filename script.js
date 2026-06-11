document.addEventListener("DOMContentLoaded", () => {
    console.log(`6098)o%:::%o(860
098)o%:::%o(8609
 6o%:%o(86098)
  (86098)o
6098)o%::%o9
098)o%::::::%o9
 6o%::::::%o(860
    6o%::%o(8609
      o(86098)
  (86098)o%:%o9
6098)o%:::%o(860
098)o%:::%o(8609
 6o%:%o(86098)
  (86098)o
6098)o%::%o9
098)o%::::::%o9
 6o%::::::%o(860
    6o%::%o(8609
      o(86098)
  (86098)o%:%o9
6098)o%:::%o(860
098)o%:::%o(8609
 6o%:%o(86098)
  (86098)o
6098)o%::%o9
098)o%::::::%o9
 6o%::::::%o(860
    6o%::%o(8609
      o(86098)
  (86098)o%:%o9
6098)o%:::%o(860
098)o%:::%o(8609
 6o%:%o(86098)
  (86098)o
6098)o%::%o9
098)o%::::::%o9
 6o%::::::%o(860
    6o%::%o(8609
      o(86098)
  (86098)o%:%o9
6098)o%:::%o(860
6098)o%:::%o(860
098)o%:::%o(8609
 6o%:%o(86098)
  (86098)o
6098)o%::%o9
098)o%::::::%o9
 6o%::::::%o(860
    6o%::%o(8609
      o(86098)
  (86098)o%:%o9
6098)o%:::%o(860
098)o%:::%o(8609
 6o%:%o(86098)
  (86098)o
6098)o%::%o9
098)o%::::::%o9
 6o%::::::%o(860
    6o%::%o(8609
      o(86098)
  (86098)o%:%o9
6098)o%:::%o(860
098)o%:::%o(8609
 6o%:%o(86098)
  (86098)o
6098)o%::%o9
098)o%::::::%o9
 6o%::::::%o(860
    6o%::%o(8609
      o(86098)
  (86098)o%:%o9
6098)o%:::%o(860`);
});

const toggles = document.querySelectorAll('.toggle');
const content  = document.querySelectorAll('.content');

toggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
        const index = e.currentTarget.dataset.target

        toggles.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));

        e.currentTarget.classList.add('active')
        content[index].classList.remove('hidden')
    })
})

window.addEventListener('keydown', e => {
    if (e.key == 'ArrowRight' && content[1].classList.contains('hidden')) {
        toggles.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));

        toggles[1].classList.add('active')
        content[1].classList.remove('hidden') 
    }

    if (e.key == 'ArrowLeft' && content[0].classList.contains('hidden')) {
        toggles.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));

        toggles[0].classList.add('active')
        content[0].classList.remove('hidden') 
    }
})