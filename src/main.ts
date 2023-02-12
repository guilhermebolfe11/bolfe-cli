import chalk from 'chalk';
import Listr from 'listr';
import type { RawOptions } from './types';
import { generateCNPJ } from './tasks/generateCnpj';
import { generateCPF } from './tasks/generateCpf';
import { help } from './tasks/help';
import { info } from './tasks/info';
import { version } from './tasks/version';
import { ruleOffThree } from './tasks/ruleOffThree';
import { setupWindows } from './tasks/setupWindows';

export async function run(options: RawOptions) {
    const tasks = new Listr([
        {
            title: 'Generate CPF',
            task: () => generateCPF(),
            enabled: () => options.cpf
        },
        {
            title: 'Generate CNPJ',
            task: () => generateCNPJ(),
            enabled: () => options.cnpj
        },
        {
            title: 'Version',
            task: () => version(),
            enabled: () => options.version
        },
        {
            title: 'Info',
            task: () => info(),
            enabled: () => options.info
        },
        {
            title: 'Help',
            task: () => help(),
            enabled: () => options.help
        },
        {
            title: 'Rule of Three',
            task: () => ruleOffThree(options.ruleOffThree),
            enabled: () => options.ruleOffThree != undefined
        },
        {
            title: 'Setup Windows',
            task: () => setupWindows(),
            enabled: () => options.setupWindows
        }
    ]);

    await tasks.run();
    console.log(`${chalk.green.bold('DONE')} Finish`);
}