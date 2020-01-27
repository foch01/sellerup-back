import * as path from 'path';
import * as JwtStrategy from 'passport-jwt';
import { readFileSync } from 'fs';
import { PassportStatic } from 'passport';
import { UserModelDb } from '@models/User.model';
import { BadCredentialsError } from '@type/custom-errors';

const { env } = process;
const PUBLIC_KEY_PATH = env.PUBLIC_KEY || 'config/cert/public.pem';
const publicKey = readFileSync(path.resolve(process.cwd(), PUBLIC_KEY_PATH), 'utf-8');

const opts: JwtStrategy.StrategyOptions = {
    jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: publicKey,
    algorithms: ['RS256'],
};

const verifyFunction: JwtStrategy.VerifiedCallback = async (payload, done) => {
    const user = await UserModelDb.findById(payload.id);

    if (user) {
        return done(null, user);
    } else {
        return done(new BadCredentialsError());
    }
};

function setPassportStrategies(passport: PassportStatic) {
    passport.use(new JwtStrategy.Strategy(opts, verifyFunction));
}

export default setPassportStrategies;
