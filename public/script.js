import data from '../Langs/Langs.js';

const select = document.querySelector('#langSelec');
const type = document.querySelector('#type');
const title = document.querySelector('#title');
const host = document.querySelector('#host');
const available = document.querySelector('#available');
const card_start = document.querySelector('#card_start');
const benefits_first = document.querySelector("#benefits_first");
const benefits_second = document.querySelector('#benefits_second');
const benefits_third = document.querySelector("#benefits_third");
const card_end = document.querySelector("#card_end");
const card_text_info = document.querySelector("#card_text_info");
const card_link_info = document.querySelector("#card_link_info");
const card_footer = document.querySelector("#card_footer")

window.onload = changeSelectValue;

function changeSelectValue(){
    select.value = 'EN-us';
}

select.addEventListener('change', function () {
    const value = data.translations[select.value];

    type.innerText = value.type;
    title.innerText = value.title;
    host.innerText = value.host;
    available.innerText = value.available;
    card_start.innerText = value.card_start;
    benefits_first.innerText = value.benefits_first;
    benefits_second.innerText = value.benefits_second;
    benefits_third.innerText = value.benefits_third;
    card_end.innerText = value.card_end;
    card_text_info.innerText = value.card_text_info;
    card_link_info.innerText = value.card_link_info;
    card_footer.innerText = value.card_footer;
});