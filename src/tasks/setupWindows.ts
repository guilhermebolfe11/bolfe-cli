import { execa } from 'execa';

export async function setupWindows() {
    const result = await execa("winget", ["list"], { cwd: process.cwd() });

    console.log(result.stdout);

    return true;
}