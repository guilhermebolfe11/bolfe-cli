import chalk from "chalk";
import { RuleOfThree } from "../types";

export function ruleOffThree(input: number[] | undefined): void {

  if (input == undefined || input.length != 3) {
    console.log(`${chalk.red.bold('ERROR')} invalid input`);
    return;
  }

  let rule: RuleOfThree = {
    n1: input[0],
    n2: input[2],
    r1: input[1],
    r2: 0
  }

  rule.r2 = (rule.n2 * rule.r1) / rule.n1;

  console.log(chalk.blue(rule.n1) + chalk.green(" => ") + chalk.blue(rule.r1));
  console.log(chalk.blue(rule.n2) + chalk.green(" => ") + chalk.blue(rule.r2));
}