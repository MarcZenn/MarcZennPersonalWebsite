export const TERMINAL_MODE_ON  = 'portfolio/app/TERMINAL_MODE_ON';
export const TERMINAL_MODE_OFF = 'portfolio/app/TERMINAL_MODE_OFF';



export const turnOnTerminalMode = (e) => {
  e.preventDefault();
  return {type: TERMINAL_MODE_ON};
}

export const turnOffTerminalMode = (e) => {
  e.preventDefault();
  return {type: TERMINAL_MODE_OFF};
}
