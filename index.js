//Form Stretch Variables
const formStretch = document.getElementById("stretch");
const btnStartStretch = document.getElementById("stretch-start");
const btnStopStretch = document.getElementById("stretch-stop");
const timeStretchTimer = document.getElementById("stretch-timer");
let stretchTimerValue;
let timeintervalStretch;

//Form Water Variables
const formWater = document.getElementById("water");
const btnStartWater = document.getElementById("water-start");
const btnStopWater = document.getElementById("water-stop");
const timeWaterTimer = document.getElementById("water-timer");
let waterTimerValue;
let timeintervalWater;

//Form Eye Exercise Variables
const formEye = document.getElementById("eye");
const btnStartEye = document.getElementById("eye-start");
const btnStopEye = document.getElementById("eye-stop");
const timeEyeTimer = document.getElementById("eye-timer");
let eyeTimerValue;
let timeintervalEye;

//Form Meditation Variables
const formMeditation = document.getElementById("meditation");
const btnStartMeditation = document.getElementById("meditation-start");
const btnStopMeditation = document.getElementById("meditation-stop");
const timeMeditationTimer = document.getElementById("meditation-timer");
let meditationTimerValue;
let timeintervalMeditation;

//Form Reading Variables
const formReading = document.getElementById("reading");
const btnStartReading = document.getElementById("reading-start");
const btnStopReading = document.getElementById("reading-stop");
const timeReadingTimer = document.getElementById("reading-timer");
let readingTimerValue;
let timeintervalReading;

//Form Pomodoro Variables
const formPomodoro = document.getElementById("pomodoro");
const btnStartPomodoro = document.getElementById("pomodoro-start");
const btnStopPomodoro = document.getElementById("pomodoro-stop");
const timePomodoroTimer = document.getElementById("pomodoro-timer");
let pomodoroTimerValue;
let timeintervalPomodoro;


//End Timer Sound
const ringerSoundPlayer = document.getElementById("ringer");

//Meditation Sounds Variables
const forestThemeSelectorPlay = document.getElementById("forest-theme-play");
const forestThemeSelectorStop = document.getElementById("forest-theme-stop");
const rainThemeSelectorPlay = document.getElementById("rain-theme-play");
const rainThemeSelectorStop = document.getElementById("rain-theme-stop");
const oceanThemeSelectorPlay = document.getElementById("ocean-theme-play");
const oceanThemeSelectorStop = document.getElementById("ocean-theme-stop");
const forestSoundPlayer = document.getElementById("forest-audio");
const rainSoundPlayer = document.getElementById("rain-audio");
const oceanSoundPlayer = document.getElementById("ocean-audio");

//Meditation Sounds Methods
forestThemeSelectorPlay.addEventListener('click', e => {
  forestSoundPlayer.play()
  forestThemeSelectorPlay.hidden = true;
  forestThemeSelectorStop.hidden = false;
})

forestThemeSelectorStop.addEventListener('click', e => {
  forestSoundPlayer.pause()
  forestThemeSelectorPlay.hidden = false;
  forestThemeSelectorStop.hidden = true;
})

rainThemeSelectorPlay.addEventListener('click', e => {
  rainSoundPlayer.play()
  rainThemeSelectorPlay.hidden = true;
  rainThemeSelectorStop.hidden = false;
})

rainThemeSelectorStop.addEventListener('click', e => {
  rainSoundPlayer.pause()
  rainThemeSelectorPlay.hidden = false;
  rainThemeSelectorStop.hidden = true;
})

oceanThemeSelectorPlay.addEventListener('click', e => {
  oceanSoundPlayer.play()
  oceanThemeSelectorPlay.hidden = true;
  oceanThemeSelectorStop.hidden = false;
})

oceanThemeSelectorStop.addEventListener('click', e => {
  oceanSoundPlayer.pause()
  oceanThemeSelectorPlay.hidden = false;
  oceanThemeSelectorStop.hidden = true;
})

const getCountDownTime = (type) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  switch (type) {
    case 'Stretch':
      return new Date(yyyy, mm, dd, stretchTimerValue.split(":")[0], stretchTimerValue.split(":")[1])
    case 'Water':
      return new Date(yyyy, mm, dd, waterTimerValue.split(":")[0], waterTimerValue.split(":")[1])
    case 'Eye':
      return new Date(yyyy, mm, dd, eyeTimerValue.split(":")[0], eyeTimerValue.split(":")[1])
    case 'Meditation':
      return new Date(yyyy, mm, dd, meditationTimerValue.split(":")[0], meditationTimerValue.split(":")[1])
    case 'Reading':
      return new Date(yyyy, mm, dd, readingTimerValue.split(":")[0], readingTimerValue.split(":")[1])
    case 'Pomodoro':
      return new Date(yyyy, mm, dd, pomodoroTimerValue.split(":")[0], pomodoroTimerValue.split(":")[1])  
    default:
      break;
  }
}

const resetClock = (id) => {
  const clock = document.getElementById(id);
  clock.querySelector('.hours').innerHTML = '00';
  clock.querySelector('.minutes').innerHTML = '00';
  clock.querySelector('.seconds').innerHTML = '00';
}

//Form Stretch Methods
formStretch.addEventListener("submit", e => {
  let stretchTimerCountDown;
  e.preventDefault();
  btnStartStretch.hidden = true;
  btnStopStretch.hidden = false;
  stretchTimerValue = timeStretchTimer.value;
  stretchTimerCountDown = getCountDownTime('Stretch');
  initializeClock('stretch-clockdiv', stretchTimerCountDown, 'Stretch');
});

btnStopStretch.addEventListener('click', e => {
  clearInterval(timeintervalStretch);
  btnStopStretch.hidden = true;
  btnStartStretch.hidden = false;
  timeStretchTimer.value = null
  resetClock('stretch-clockdiv')
})

//Form Water Methods
formWater.addEventListener("submit", e => {
  let waterTimerCountDown;
  e.preventDefault();
  btnStartWater.hidden = true;
  btnStopWater.hidden = false;
  waterTimerValue = timeWaterTimer.value;
  waterTimerCountDown = getCountDownTime('Water');
  initializeClock('water-clockdiv', waterTimerCountDown, 'Water');
});

btnStopWater.addEventListener('click', e => {
  clearInterval(timeintervalWater);
  btnStopWater.hidden = true;
  btnStartWater.hidden = false;
  timeWaterTimer.value = null
  resetClock('water-clockdiv')
})

//Form Eye Methods
formEye.addEventListener("submit", e => {
  let eyeTimerCountDown;
  e.preventDefault();
  btnStartEye.hidden = true;
  btnStopEye.hidden = false;
  eyeTimerValue = timeEyeTimer.value;
  eyeTimerCountDown = getCountDownTime('Eye');
  initializeClock('eye-clockdiv', eyeTimerCountDown, 'Eye');
});

btnStopEye.addEventListener('click', e => {
  clearInterval(timeintervalEye);
  btnStopEye.hidden = true;
  btnStartEye.hidden = false;
  timeEyeTimer.value = null
  resetClock('eye-clockdiv')
})

//Form Meditation Methods
formMeditation.addEventListener("submit", e => {
  let meditationTimerCountDown;
  e.preventDefault();
  btnStartMeditation.hidden = true;
  btnStopMeditation.hidden = false;
  meditationTimerValue = timeMeditationTimer.value;
  meditationTimerCountDown = getCountDownTime('Meditation');
  initializeClock('meditation-clockdiv', meditationTimerCountDown, 'Meditation');
});

btnStopMeditation.addEventListener('click', e => {
  clearInterval(timeintervalMeditation);
  btnStopMeditation.hidden = true;
  btnStartMeditation.hidden = false;
  timeMeditationTimer.value = null
  resetClock('meditation-clockdiv')
})

//Form Reading Methods
formReading.addEventListener("submit", e => {
  let readingTimerCountDown;
  e.preventDefault();
  btnStartReading.hidden = true;
  btnStopReading.hidden = false;
  readingTimerValue = timeReadingTimer.value;
  readingTimerCountDown = getCountDownTime('Reading');
  initializeClock('reading-clockdiv', readingTimerCountDown, 'Reading');
});

btnStopReading.addEventListener('click', e => {
  clearInterval(timeintervalReading);
  btnStopReading.hidden = true;
  btnStartReading.hidden = false;
  timeReadingTimer.value = null
  resetClock('reading-clockdiv')
})

//Form Pomodoro Methods
formPomodoro.addEventListener("submit", e => {
  let pomodoroTimerCountDown;
  e.preventDefault();
  btnStartPomodoro.hidden = true;
  btnStopPomodoro.hidden = false;
  pomodoroTimerValue = timePomodoroTimer.value;
  pomodoroTimerCountDown = getCountDownTime('Pomodoro');
  initializeClock('pomodoro-clockdiv', pomodoroTimerCountDown, 'Pomodoro');
});

btnStopPomodoro.addEventListener('click', e => {
  clearInterval(timeintervalPomodoro);
  btnStopPomodoro.hidden = true;
  btnStartPomodoro.hidden = false;
  timePomodoroTimer.value = null
  resetClock('pomodoro-clockdiv')
})


function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    return {
      total,
      hours,
      minutes,
      seconds
    };
  }

function initializeClock(id, endtime, type) {
    const clock = document.getElementById(id);
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock(){
        const t = getTimeRemaining(endtime);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if( hoursSpan.innerHTML === "00" && minutesSpan.innerHTML === "00" && secondsSpan.innerHTML === "00") {
          switch (type) {
            case 'Stretch':
              clearInterval(timeintervalStretch);
              btnStopStretch.hidden = true;
              btnStartStretch.hidden = false;
              timeStretchTimer.value = null
              break;
            case 'Water':
              clearInterval(timeintervalWater);
              btnStopWater.hidden = true;
              btnStartWater.hidden = false;
              timeWaterTimer.value = null
              break;
            case 'Eye':
              clearInterval(timeintervalEye);
              btnStopEye.hidden = true;
              btnStartEye.hidden = false;
              timeEyeTimer.value = null
              break;
            case 'Meditation':
              clearInterval(timeintervalMeditation);
              btnStopMeditation.hidden = true;
              btnStartMeditation.hidden = false;
              timeMeditationTimer.value = null
              break;
            case 'Reading':
              clearInterval(timeintervalReading);
              btnStopReading.hidden = true;
              btnStartReading.hidden = false;
              timeReadingTimer.value = null
              break;
            case 'Pomodoro':
              clearInterval(timeintervalPomodoro);
              btnStopPomodoro.hidden = true;
              btnStartPomodoro.hidden = false;
              timePomodoroTimer.value = null
              break;      
          
            default:
              break;
          }
          new Audio("./sounds/ringer.mp3").play();
        }
      }
      
      updateClock(); // run function once at first to avoid delay

      switch (type) {
        case 'Stretch':
          timeintervalStretch = setInterval(updateClock,1000);
          break;
        case 'Water':
          timeintervalWater = setInterval(updateClock,1000);
          break;
        case 'Eye':
          timeintervalEye = setInterval(updateClock,1000); 
          break;   
        case 'Meditation':
          timeintervalMeditation = setInterval(updateClock,1000);
          break;
        case 'Reading':
          timeintervalReading = setInterval(updateClock,1000);
          break;
        case 'Pomodoro':
          timeintervalPomodoro = setInterval(updateClock,1000);
          break;
        default:
          break;
      }

  }
