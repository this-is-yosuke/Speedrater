export const authMiddleware = (...roles) => (req, res, next) => {
    if(req.session.user) {
        if(roles.includes(req.session.user.role)) {
            next();
        }else{
            res.status(403);
            res.send('Who do you think you are?!');
        }
    }else{
        res.status(401);
        res.send('GTFO');
    }
}