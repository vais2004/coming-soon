window.onload = () => {
  const seconds = document.querySelector(".seconds .number"),
    minutes = document.querySelector(".minutes .number"),
    hours = document.querySelector(".hours .number"),
    days = document.querySelector(".days .number");

  let secValue = 11,
    minValue = 2,
    hourValue = 2,
    dayValue = 9;

  const updateTime = () => {
    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
  };

  updateTime(); // initial UI update

  const timeFunction = setInterval(() => {
    secValue--;

    if (secValue < 0) {
      secValue = 59;
      minValue--;

      if (minValue < 0) {
        minValue = 59;
        hourValue--;

        if (hourValue < 0) {
          hourValue = 23;
          dayValue--;

          if (dayValue < 0) {
            clearInterval(timeFunction);
            return;
          }
        }
      }
    }

    updateTime();
  }, 1000);
};
