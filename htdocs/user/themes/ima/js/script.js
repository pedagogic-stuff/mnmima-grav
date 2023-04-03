
console.log('hello');

function init() {

    const bg_img = document.querySelector('.bg-img');
    const popins = document.querySelectorAll('.popin_outer');
    const objects = document.querySelectorAll('.object');

    for (const el of objects) {
        console.log(el);

        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            console.log(id);

            const pop_id = '.popin_outer[data-id="' + id + '"]';
            console.log(pop_id);

            const object_pop = document.querySelector( pop_id );
            console.log(object_pop);

            object_pop.classList.remove('hidden');
            bg_img.classList.add('blurred');

        })

    }

    const close_btn = document.querySelectorAll('.close');

    for (const btn of close_btn) {
        btn.addEventListener('click', () => {
            btn.closest('.popin_outer').classList.add('hidden');
            bg_img.classList.remove('blurred');
        })


    }

}



document.addEventListener('DOMContentLoaded', () => init());