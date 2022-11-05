import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

let getEl = selector => document.querySelector(selector);

const input = getEl('#search-box');
const countryList = getEl('.country-list');
const countryInfo = getEl('.country-info');

function renderCountryList(countries) {
  const markup = countries.map(country => {
    return `<li>
    <img src="#{country.flags.svg}" alt="Flag of ${country.name.official}" 
    width="40" height="30">
    <p>${country.name.official}</p></li>`;
  })
    .join('');
  countryList.innerHTML = markup;
}

