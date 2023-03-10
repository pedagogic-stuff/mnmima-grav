
console.log('hello');

function init() {

    const popins = document.querySelectorAll('.popin');
    const objects = document.querySelectorAll('.object');

    for (const el of objects) {
        console.log(el);

        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            console.log(id);

            const pop_id = '.popin[data-id="' + id + '"]';
            console.log(pop_id);

            const object_pop = document.querySelector( pop_id );
            console.log(object_pop);

            object_pop.classList.remove('hidden');

        })

    }

    const close_btn = document.querySelectorAll('.close');

    for (const btn of close_btn) {
        btn.addEventListener('click', () => {
            btn.closest('.popin').classList.add('hidden');
        })


    }

}



document.addEventListener('DOMContentLoaded', () => init());