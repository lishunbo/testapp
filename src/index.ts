import { version } from './version';

console.log('abc', version);

export default function HelloDemo(a: number, b: number) {
  console.log('helloDemo', a + b);
  console.log('version:', version);
}
