import chalk from "chalk";

export function generateCNPJ(): void {
  const n = 9;
  const n1 = Math.floor(Math.random() * n) + 1;
  const n2 = Math.floor(Math.random() * n) + 1;
  const n3 = Math.floor(Math.random() * n) + 1;
  const n4 = Math.floor(Math.random() * n) + 1;
  const n5 = Math.floor(Math.random() * n) + 1;
  const n6 = Math.floor(Math.random() * n) + 1;
  const n7 = Math.floor(Math.random() * n) + 1;
  const n8 = Math.floor(Math.random() * n) + 1;
  const n9 = 0;
  const n10 = 0;
  const n11 = 0;
  const n12 = 1;
  let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
  d1 = 11 - (Math.floor(d1 % 11));
  if (d1 >= 10) {
    d1 = 0;
  }
  let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
  d2 = 11 - (Math.floor(d2 % 11));
  if (d2 >= 10) {
    d2 = 0;
  }
  console.log(chalk.green.bold(`${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}`));
}