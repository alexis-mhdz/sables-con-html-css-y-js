const sablesSpan = document.querySelectorAll('.sable span');

for (let index = 0; index < sablesSpan.length; index++) {
    sablesSpan[index].addEventListener('click', function() {
        sablesSpan[index].classList.toggle('active');
    });
}