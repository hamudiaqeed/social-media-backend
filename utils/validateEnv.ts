import {
    cleanEnv, port, str,
} from 'envalid';
   
function validateEnv() {
    cleanEnv(process.env, {
        JWT_PASSWORD: str(),
        PORT: port(),
    });
}

export default validateEnv;