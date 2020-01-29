import { spawn } from 'child_process';

const numberBuild = process.argv[2];
const IP_SERVER = process.argv[3];

const command = spawn('scp', [
    `./build/sellerup-back-${numberBuild}.tar.gz`,
    `root@${IP_SERVER}:/home/sellerup-staging/build`,
]);
command.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});
command.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
});
