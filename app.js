
/*function getSleepHours(day) {
  return day = 'monday' ? '8'
       : day ='tuesday' ? '7'
       : day = 'wedneday' ? '6'
       : '5';
};

console.log(getSleepHours('tuesday'));*/

const getSleepHours = day => {
    switch (day){
    case 'monday': 
      return 8;
      break;
    case 'tuesday': 
      return 7;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 6;
      break;
    case 'sunday':
      return 7;
      break;
    default: 
      return 0;
    }
  };
  
  
  //console.log(getSleepHours('day'));
  //console.log(getSleepHours('monday'));
  //console.log(getSleepHours('friday'));
  
  const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
  };
  
  const actualSleep = getActualSleepHours();
  const idealSleep = getIdealSleepHours();
  
  console.log(actualSleep);
  console.log(idealSleep);
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  
  const compareHours = (actualSleep, idealSleep) => {
    if (actualSleep = idealSleep) {
      console.log('the perfect amount of sleep')
    } else if (actualSleep > idealSleep) {
      console.log('You sleep to much. Get a job.')
    } else {
      console.log('Nap?')
    }
  };
  
  //compareHours();
  
  //code breaks if '=>' || '{}' are used
  /*const calculateSleepDebt = (actualSleep, idealSleep) 
    if (actualSleep > idealSleep) {
      const extraSleep = actualSleep - idealSleep;
      console.log(`You've slept ${extraSleep} extra hours this week.`);
    } else if (actualSleep < idealSleep) {
      const missedSleep = idealSleep - actualSleep;
      console.log(`You are missing ${missedSleep} hours of sleep.`)
    } else
    console.log('You\'re sleeping the perfect amount');*/
  
  
  //calculateSleepDebt();
  
  const calculateSleepDebt = (getActualSleepHours, getIdealSleepHours) => {
    if ((actualSleep - idealSleep) > 0) {
      console.log('oversleeping');
    } else if ((actualSleep - idealSleep) < 0) {
      console.log('undersleeping');
    } else {
      console.log('perfect');
    }
  };
  
  calculateSleepDebt();
  
  function calculateSleepDebt2(getActualSleepHours, getIdealSleepHours) {
    return ((actualSleep - idealSleep) > 0) ? 'oversleeping'
         : ((actualSleep - idealSleep) < 0) ? 'undersleeping'
         : 'perfect';
  }
  
  console.log(calculateSleepDebt());
  