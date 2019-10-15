module.exports = {
    isLoggedIn(req,res,next){
        if(req.isAuthenticated())
        {
            
            return next();
        }
        req.flash('needsLogin', 'Inicie sesión para continuar');
        return res.redirect('/auth/login');
    },
    isNotLoggedIn(req,res,next){
        if(!req.isAuthenticated())
        {
            return next();
        }
        return res.redirect('/control');
    }
}