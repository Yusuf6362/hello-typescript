const lang: string = "TypeScript";
const greeting: string = `Hello, ${lang}!`;
console.log(greeting);
import { isTriplet } from './pythagoras';

const max = 50; // Grenze bis zu der gesucht wird

for (let a = 1; a <= max; a++) {
  for (let b = a; b <= max; b++) {
    for (let c = b; c <= max; c++) {
      if (isTriplet(a, b, c)) {
        console.log(`Triplet gefunden: ${a}, ${b}, ${c}`);
      }
    }
  }
}

