'use strict';

const navigation = document.querySelectorAll('.cities');
const settingButtons = document.querySelectorAll('[data-setting-name]');
const applySetting = (params) => {
    for (const [key, value] of Object.entries(params)) {
        const activeButton = Array.from(settingButtons)
            .find((element) => element.classList.contains('active'));
        const setButton = Array.from(settingButtons)
            .find((element) => element.dataset['settingValue'] === value);
        activeButton.classList.remove('active');
        setButton.classList.add('active');

    }
}

const setClickLink = (evt) => {
    const params = {};
    const link = evt.target.closest('.cities__item');
    const {settingName, settingValue} = link.dataset;
    params[settingName] = settingValue;
    applySetting(params);
}

const init = () => {
    if (navigation) {
        navigation.forEach((item) => {
            item.addEventListener('click', (evt) => {
                setClickLink(evt);
            });
        });
    }
}
init();