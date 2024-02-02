import bcryptjs from 'bcryptjs';
import User from '../models/UserModel.js';
import { errorHandler } from '../utils/error.js';


export const updateUser = async (req, res, next) => {
    if(req.user.id !== req.params.userId) {
        return next(errorHandler('Unauthorized', 403));
    }

    if(req.body.password) {
        if(req.body.password.length < 6) {
            return next(errorHandler('Password must be at least 6 characters', 400));
        }
        req.body.password = await bcryptjs.hash(req.body.password, 10);
    }

    if(req.body.username) {
        if(req.body.username.length < 7 || req.body.username.length > 20) {
            return next(errorHandler('Username must be between 7 and 20 characters', 400));
        }
        if(req.body.username.includes(' ')) {
            return next(errorHandler('Username cannot contain spaces', 400));
        }
        if(req.body.username !== req.body.username.toLowerCase()) {
            return next(errorHandler('Username must be lowercase', 400));
        }
        if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
            return next(
              errorHandler(400, 'Username can only contain letters and numbers')
            );
        }
    }

    try {
        const updatedUser =  await User.findByIdAndUpdate(req.params.userId, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                profilePicture: req.body.profilePicture,
                password: req.body.password,
            }
        }, { new: true });
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    if(req.user.id !== req.params.userId) {
        return next(errorHandler('Unauthorized', 403));
    }

    try {
        await User.findByIdAndDelete(req.params.userId);
        res.status(200).json('User has been deleted');
    } catch (error) {
        next(error);
    }
};