import * as shell from 'shelljs';

shell.cp('-R', 'src/swagger/*.yml', 'dist/swagger/');
