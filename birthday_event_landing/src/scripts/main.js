AOS.init();

const eventDate = new Date("Mar 10, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const countingHours = setInterval(function () {
  const now = new Date();
  const currentTimeStamp = now.getTime();

  const distance = eventTimeStamp - currentTimeStamp;

  const daysMiliseconds = 1000 * 60 * 60 * 24;
  const hoursMiliseconds = 1000 * 60 * 60;
  const minuteMilliseconds = 1000 * 60;

  const daysUntilEvent = Math.floor(distance / daysMiliseconds);
  const hoursUntilEvent = Math.floor(
    (distance % daysMiliseconds) / hoursMiliseconds
  );
  const minutesUntilEvent = Math.floor(
    (distance % hoursMiliseconds) / minuteMilliseconds
  );
  const secondsUntilEvent = Math.floor((distance % minuteMilliseconds) / 1000);

  document.getElementById(
    "contador"
  ).innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

  if (distance < 0) {
    clearInterval(countingHours);
    document.getElementById("contador").innerHTML = "Evento expirado";
  }
}, 1000);
