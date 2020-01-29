import { spawn } from 'child_process';

const numberBuild = process.argv[2];
const IP_SERVER = process.argv[3];

const command = spawn('ssh', [
    `root@${IP_SERVER}`,
    'sudo',
    '/home/sellerup-staging/deploy.sh',
    '-n',
    `${numberBuild}`,
    '-d',
    'false',
]);
command.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});
command.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
});
