import chalk from 'chalk';
import Listr from 'listr';
import { execa } from 'execa';
import arg from 'arg';

function generateCNPJ() {
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

function generateCPF() {
    const n = 9;
    const n1 = Math.floor(Math.random() * n) + 1;
    const n2 = Math.floor(Math.random() * n) + 1;
    const n3 = Math.floor(Math.random() * n) + 1;
    const n4 = Math.floor(Math.random() * n) + 1;
    const n5 = Math.floor(Math.random() * n) + 1;
    const n6 = Math.floor(Math.random() * n) + 1;
    const n7 = Math.floor(Math.random() * n) + 1;
    const n8 = Math.floor(Math.random() * n) + 1;
    const n9 = Math.floor(Math.random() * n) + 1;
    let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
    d1 = 11 - (Math.floor(d1 % 11));
    if (d1 >= 10) {
        d1 = 0;
    }
    let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
    d2 = 11 - (Math.floor(d2 % 11));
    if (d2 >= 10) {
        d2 = 0;
    }
    console.log(chalk.green.bold(`${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`));
}

function help() {
    let helps = [
        {
            comand: "-h, --help",
            description: "Commands for help"
        },
        {
            comand: "-i, --info",
            description: "Commands for info"
        },
        {
            comand: "-y, --yes",
            description: "Commands for skip"
        },
        {
            comand: "-v, --version",
            description: "Commands for version"
        },
        {
            comand: "--cpf",
            description: "Command for generate cpf"
        },
        {
            comand: "--cnpj",
            description: "Command for generate cnpj"
        },
        {
            comand: "--rot",
            description: "Command for generate rule of three"
        }
    ];
    helps.forEach(h => {
        console.log(chalk.cyanBright(h.comand) + " => " + chalk.gray(h.description));
    });
}

function info() {
    console.log(chalk.blue.bold('Created by: ') + "Guilherme Bolfe");
}

function version() {
    console.log(chalk.whiteBright.bold('Version: '));
}

function ruleOffThree(input) {
    if (input == undefined || input.length != 3) {
        console.log(`${chalk.red.bold('ERROR')} invalid input`);
        return;
    }
    let rule = {
        n1: input[0],
        n2: input[2],
        r1: input[1],
        r2: 0
    };
    rule.r2 = (rule.n2 * rule.r1) / rule.n1;
    console.log(chalk.blue(`${rule.n1}`) + chalk.green(` => `) + chalk.blue(`${rule.r1}`));
    console.log(chalk.blue(`${rule.n2}`) + chalk.green(` => `) + chalk.blue(`${rule.r2}`));
}

async function setupWindows() {
    const result = await execa("winget", ["list"], { cwd: process.cwd() });
    console.log(result.stdout);
    return true;
}

async function run(options) {
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

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg({
        '--cpf': Boolean,
        '--cnpj': Boolean,
        '--yes': Boolean,
        '--version': Boolean,
        '--help': Boolean,
        '--info': Boolean,
        '--rot': [Number],
        '--setup': Boolean,
        '-y': '--yes',
        '-h': '--help',
        '-i': '--info',
        '-v': '--version',
        '-s': '--setup'
    }, {
        argv: rawArgs,
    });
    return {
        cpf: args['--cpf'] || false,
        cnpj: args['--cnpj'] || false,
        skipPrompts: args['--yes'] || false,
        version: args['--version'] || false,
        info: args['--info'] || false,
        help: args['--help'] || false,
        ruleOffThree: args['--rot'],
        setupWindows: args['--setup'] || false
    };
}

async function cli(args) {
    try {
        const rawOptions = parseArgumentsIntoOptions(args);
        await run(rawOptions);
    }
    catch (err) {
        if (err.code === 'ARG_UNKNOWN_OPTION') {
            console.log(`${chalk.red.bold('ERROR')} ${err.message}`);
        }
    }
}

export { cli };
