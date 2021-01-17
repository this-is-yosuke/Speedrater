import session from 'express-session'

const sessionConfiguration = {
    secret: 'surprise',
    cookie: { secure: false }
};

export const sessionMiddleware = session(sessionConfiguration);