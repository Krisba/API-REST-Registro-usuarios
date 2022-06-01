const {
    healthCheck,
} = require("../controllers/healthCheck");

const {
    readinessProbe,
    livenessProbe
} = require("../controllers/applicationAvailability")

const {
    getAllData,
    getDatosUsuario,
    postDatosUsuario,
    putDatosUsuario,
    deleteDatosUsuario
} = require("../controllers/restUsuario");


exports.init = app => {
    app.get(
        '/'
        , healthCheck
    );
    app.get(
        '/readinessProbe'
        , readinessProbe
    );
    app.get(
        '/livenessProbe'
        , livenessProbe
    );
    app.get(
        '/personas'
        , getAllData
    );
    app.get(
        '/persona/:dni'
        , getDatosUsuario
    );
    app.post(
        '/persona',
        postDatosUsuario
    );
    app.put(
        '/persona/:dni'
        , putDatosUsuario
    )
    app.delete(
        '/persona/:dni'
        , deleteDatosUsuario
    )
};
