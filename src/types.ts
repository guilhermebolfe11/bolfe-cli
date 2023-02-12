export type Args = string[];
export type RawOptions = {
    cpf: boolean;
    skipPrompts: boolean;
    cnpj: boolean;
    help: boolean;
    info: boolean;
    version: boolean;
    ruleOffThree: number[] | undefined;
    setupWindows: boolean;
};

export type RuleOfThree = {
    n1: number;
    r1: number;
    n2: number;
    r2: number;
}