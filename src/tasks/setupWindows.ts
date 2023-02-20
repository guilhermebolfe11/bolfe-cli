import chalk from 'chalk';
import { execa, ExecaError } from 'execa';

export async function setupWindows(): Promise<void> {
    var logs = new Array<string>();
    for (let i = 0; i < applications.length; i++) {

        try {
            let args = [
                "install",
                "-e",
                "--id",
                applications[i]
            ];

            const result = await execa("winget", args, { cwd: process.cwd() });

            logs.push(chalk.green("Success") + chalk.gray(" => ") + chalk.gray(applications[i]));
            logs.push(result.stdout);

        } catch (err) {

            if ((err as ExecaError).exitCode == 2316632107) {
                logs.push(chalk.yellow("Warning") + chalk.white(" => ") + chalk.white(applications[i]));
                logs.push(chalk.gray((err as ExecaError).message));
            } else {
                logs.push(chalk.red("Error") + chalk.white(" => ") + chalk.white(applications[i]));
                logs.push(chalk.gray((err as ExecaError).message));
            }
        }
    }

    logs.forEach(log => console.log(log));
}

const applications = [
    "Microsoft.VisualStudioCode",
    "Insomnia.Insomnia",
    "Brave.Brave",
    "Piriform.CCleaner",
    "Docker.DockerDesktop",
    "Figma.Figma",
    "OpenJS.NodeJS",
    "Yarn.Yarn"
]
