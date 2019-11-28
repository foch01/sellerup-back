export class BadCredentialsError extends Error {
    status: number;
    message: string;
    level: string;
    constructor() {
        const message = "Bad credentials";
        super(message);
        this.status = 400;
        this.level = "info";
        this.message = message;
    }
  }
