import chalk from "chalk";

export function help(): void {

  let helps: Help[] = [
    {
      comand :"-h, --help",
      description: "Commands for help"
    },
    {
      comand :"-i, --info",
      description: "Commands for info"
    },
    {
      comand :"-y, --yes",
      description: "Commands for skip"
    },
    {
      comand :"-v, --version",
      description: "Commands for version"
    },
    {
      comand :"--cpf",
      description: "Command for generate cpf"
    },
    {
      comand :"--cnpj",
      description: "Command for generate cnpj"
    },
    {
      comand :"--rot",
      description: "Command for generate rule of three"
    }
  ];

  helps.forEach(h => {
    console.log(chalk.cyanBright(h.comand)+" => "+chalk.gray(h.description));
  });
}

type Help = {
  comand: string
  description: string
}
