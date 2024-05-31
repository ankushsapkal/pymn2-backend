const errorMiddleware = (err, req, res, next) => { 
    err.message ||= 'Something went wrong';
    err.statusCode ||= 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
}

// const TryCatch = (passedFunc) => async (req, res, next) => {
//   try {
//     await passedFunc(req, res, next);
//   } catch (error) {
//     next(error);
//   }
// };

export {
    errorMiddleware,
    // TryCatch,
};