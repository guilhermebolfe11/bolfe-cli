import chalk from "chalk";

export function version(): void {
  console.log(chalk.whiteBright.bold("Version: 1.0.0"));
}