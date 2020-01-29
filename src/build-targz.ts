import { spawn } from 'child_process';

const numberBuild = process.argv.slice(2);
const command = spawn('tar', [
    '-zcf',
    `./build/sellerup-back-${numberBuild}.tar.gz`,
    './node_modules',
    './dist',
    './views',
    './package.json',
    './elasticsearch',
]);

command.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});
command.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
});
