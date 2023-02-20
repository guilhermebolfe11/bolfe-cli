import { ArgError } from 'arg';
import chalk from 'chalk';
import { run } from './main';
import { parseArgumentsIntoOptions } from './tasks/parseArgumentsIntoOptions';

import type { Args } from './types';

export async function cli(args: Args) {
    try {
        const rawOptions = parseArgumentsIntoOptions(args);
        await run(rawOptions);
    } catch (err) {
        if ((err as ArgError).code === 'ARG_UNKNOWN_OPTION') {
            console.log(`${chalk.red.bold('ERROR')} ${(err as ArgError).message}`);
        }else{
            console.log(`${chalk.red.bold('ERROR')} ${(err as Error).message}`);
        }
    }
}