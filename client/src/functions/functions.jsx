function consensusChecker(optionData, option1, option2, option3, option4, option5) {
  if((option1 === 999) || (option1 > option2 && option1 > option3 && option1 > option4 && option1 > option5)) {
    const winningOptionData = optionData.filter(choice => choice.option === 1);
    return winningOptionData;

  } else if((option2 === 999) || (option2 > option1 && option2 > option3 && option2 > option4 && option2 > option5)) {
    const winningOptionData = optionData.filter(choice => choice.option === 2);
    return winningOptionData;

  } else if((option3 === 999) || (option3 > option1 && option3 > option2 && option3 > option4 && option3 > option5)) {
    const winningOptionData = optionData.filter(choice => choice.option === 3);
    return winningOptionData;

  } else if((option4 === 999) || (option4 > option1 && option4 > option2 && option4 > option3 && option4 > option5)) {
    const winningOptionData = optionData.filter(choice => choice.option === 4);
    return winningOptionData;

  } else if((option5 === 999) || (option5 > option1 && option5 > option2 && option5 > option3 && option5 > option4)) {
    const winningOptionData = optionData.filter(choice => choice.option === 5);
    return winningOptionData;

  } else if(option1 === option2 && option1 > option3 && option1 > option4 && option1 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 2);
    return winningOptionData;

  } else if(option1 > option2 && option1 === option3 && option1 > option4 && option1 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 3);
    return winningOptionData;

  } else if(option1 > option2 && option1 > option3 && option1 === option4 && option1 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 4);
    return winningOptionData;

  } else if(option1 > option2 && option1 > option3 && option1 > option4 && option1 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 5);
    return winningOptionData;

  } else if(option2 > option1 && option2 === option3 && option2 > option4 && option2 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 2 || choice.option === 3);
    return winningOptionData;

  } else if(option2 > option1 && option2 === option3 && option2 > option4 && option2 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 2 || choice.option === 3);
    return winningOptionData;

  } else if(option2 > option1 && option2 > option3 && option2 === option4 && option2 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 2 || choice.option === 4);
    return winningOptionData;

  } else if(option2 > option1 && option2 > option3 && option2 > option4 && option2 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 2 || choice.option === 5);
    return winningOptionData;

  } else if(option3 > option1 && option3 > option2 && option3 === option4 && option3 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 3 || choice.option === 4);
    return winningOptionData;

  } else if(option3 > option1 && option3 > option2 && option3 > option4 && option3 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 3 || choice.option === 5);
    return winningOptionData;

  } else if(option4 > option1 && option4 > option2 && option4 > option3 && option4 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 4 || choice.option === 5);
    return winningOptionData;

  } else if(option1 === option2 && option1 === option3 && option1 > option4 && option1 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 2 || choice.option === 3);
    return winningOptionData;

  } else if(option1 === option2 && option1 > option3 && option1 === option4 && option1 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 2 || choice.option === 4);
    return winningOptionData;

  } else if(option1 === option2 && option1 > option3 && option1 > option4 && option1 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 2 || choice.option === 5);
    return winningOptionData;

  } else if(option1 > option2 && option1 === option3 && option1 === option4 && option1 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 3 || choice.option === 4);
    return winningOptionData;

  } else if(option1 > option2 && option1 === option3 && option1 > option4 && option1 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 3 || choice.option === 5);
    return winningOptionData;

  } else if(option1 > option2 && option1 > option3 && option1 === option4 && option1 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 4 || choice.option === 5);
    return winningOptionData;

  } else if(option2 > option1 && option2 === option3 && option2 === option4 && option2 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 2 || choice.option === 3 || choice.option === 4);
    return winningOptionData;

  } else if(option2 > option1 && option2 === option3 && option2 > option4 && option2 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 2 || choice.option === 3 || choice.option === 5);
    return winningOptionData;

  } else if(option2 > option1 && option2 > option3 && option2 === option4 && option2 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 2 || choice.option === 4 || choice.option === 5);
    return winningOptionData;

  } else if(option3 > option1 && option3 > option2 && option3 === option4 && option3 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 3 || choice.option === 4 || choice.option === 5);
    return winningOptionData;

  } else if(option1 === option2 && option1 === option3 && option1 === option4 && option1 > option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 2 || choice.option === 3 || choice.option === 4);
    return winningOptionData;

  } else if(option1 === option2 && option1 === option3 && option1 > option4 && option1 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 2 || choice.option === 3 || choice.option === 5);
    return winningOptionData;

  } else if(option1 === option2 && option1 > option3 && option1 === option4 && option1 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 2 || choice.option === 4 || choice.option === 5);
    return winningOptionData;

  } else if(option1 > option2 && option1 === option3 && option1 === option4 && option1 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 1 || choice.option === 3 || choice.option === 4 || choice.option === 5);
    return winningOptionData;

  } else if(option2 > option1 && option2 === option3 && option2 === option4 && option2 === option5) {
    const winningOptionData = optionData.filter(choice => choice.option === 2 || choice.option === 3 || choice.option === 4 || choice.option === 5);
    return winningOptionData;

  } else {
    const winningOptionData = optionData;
    return winningOptionData;
  }
}

export {consensusChecker};