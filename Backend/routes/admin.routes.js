import express from 'express';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';
import { allAdmin, ChangePassword, dashboard, deleteAllAdmin, login, requestChangePassword, signup, verify } from '../controllers/admin.ctrl.js';


const admin_routes = express.Router()

admin_routes.get('/all',allAdmin)

admin_routes.delete('/delete',deleteAllAdmin)

admin_routes.post('/signup',signup)

admin_routes.post('/verify',verify)

admin_routes.post('/login',login)

admin_routes.get('/changePassword',isLoggedIn,requestChangePassword)

admin_routes.post('/changePassword',isLoggedIn,ChangePassword)

admin_routes.get('/dashboard',isLoggedIn,dashboard)

export default admin_routes;