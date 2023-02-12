import arg from 'arg';

import { Args, RawOptions } from '../types';

export function parseArgumentsIntoOptions(rawArgs: Args): RawOptions {
    const args = arg(
        {
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
        },
        {
            argv: rawArgs,
        }
    );

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

