addCurrentTime = (cities) => {
  for (let i = 0; i < cities.length; i++) {
    let timeZone;

    // add timezone for cities
    switch (cities[i]) {
      case 'London':
        timeZone = 'Europe/London';
        break;
      case 'New York':
        timeZone = 'America/New_York';
        break;
      case 'Tokyo':
        timeZone = 'Asia/Tokyo';
        break;
      default:
        console.log('City option is not available');
        break;
    }

    // extract current time in HH:MM format
    let currentTime = new Date().toLocaleString('en-GB', {
      timeZone: `${timeZone}`,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });

    // make icon solid if current time is between 22-07
    let currentTimeHours = currentTime.slice(0, 2);

    if (currentTimeHours >= 22 || currentTimeHours < 7) {
      let nightCity = cities[i];
      let iconElement = document.getElementsByTagName('h2');

      for (let j = 0; j < iconElement.length; j++) {
        if (iconElement[j].outerText === nightCity) {
          iconElement[j].classList.add('night');
        }
      }
    }

    // target atr in html for a city and add current time in a text tag
    document.querySelector(`[city='${cities[i]}']`).innerHTML = currentTime;
  }
};

// call function with an array of cities
addCurrentTime(['London', 'New York', 'Tokyo']);

// call function every 30s to update current time
setInterval(function () {
  addCurrentTime(['London', 'New York', 'Tokyo']);
}, 30000);
