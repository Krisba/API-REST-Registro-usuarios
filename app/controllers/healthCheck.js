exports.healthCheck = async (req, res, next) => {
    
    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    }
    try {
        res.send(healthcheck)
    } catch (error) {
        healthcheck.message = error
        res.status(503).send();
    }
}
