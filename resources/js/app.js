require('./materialize.min');

// do czego służy ten script, był skopiowany z wcześniejszego projektu i przeniosłem go do Webpack
document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems, {});
});
