import readlineSync from 'readline-sync';
import { execSync } from 'child_process';

export const read = (prompt) => readlineSync.question(prompt);
export const print = (string) => process.stdout.write(string);
export const println = (string) => console.log(string);
export const say = (string) => execSync(`say ${string}`, { encoding: 'utf-8' });

