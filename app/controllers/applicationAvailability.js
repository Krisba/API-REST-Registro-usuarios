exports.readinessProbe = async (req, res, next) => {
    
    try {
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(503).send();
    }
    
}

exports.livenessProbe = async (req, res, next) => {
    
    try {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        res.write("OK");
        res.end();
    } catch (error) {
        console.log(error);
        res.sendStatus(503).send();
    }
    
}