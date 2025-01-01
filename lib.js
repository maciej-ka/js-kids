import readlineSync from 'readline-sync';
import { execSync } from 'child_process';

export const read = (prompt) => readlineSync.question(prompt);
export const print = (arg) => process.stdout.write(arg.toString());
export const println = (arg) => console.log(arg.toString());
export const say = (arg) => execSync(`say ${arg.toString()}`, { encoding: 'utf-8' });

