const DAY_NAMES = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
  'thirteenth',
  'fourteenth',
  'fifteenth',
  'sixteenth',
  'seventeenth',
  'eighteenth',
  'nineteenth',
  'twentieth',
  'twenty-first',
  'twenty-second',
  'twenty-third',
  'twenty-fourth',
  'twenty-fifth',
  'twenty-sixth',
  'twenty-seventh',
  'twenty-eighth',
  'twenty-ninth',
  'thirthieth',
  'thirty-first',
];

function getDayName(date) {
  return DAY_NAMES[date.getDate() - 1];
}

const MONTH_NAMES = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

function getMonthName(date) {
  return MONTH_NAMES[date.getMonth()];
}

function capitalize(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

function getRhymeSuffix(str) {
  let substr = str.split('-').pop();

  return substr === 'eighth' ? substr : substr.replace(/e?([^aeiou])+/, '');
}

function getGreeting(date) {
  const dayName = getDayName(date);
  return (
    capitalize(getMonthName(date)) +
    ' the ' +
    capitalize(dayName) +
    ' be w' +
    getRhymeSuffix(dayName) +
    ' you!'
  );
}

// Try it out in your browser console:
// getForceGreeting(new Date());

export default getForceGreeting;
