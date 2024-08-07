import chalk from 'chalk';

const message = (text) =>{
    return chalk.bgBlueBright(text)
}
console.log(message("hola como estas"));