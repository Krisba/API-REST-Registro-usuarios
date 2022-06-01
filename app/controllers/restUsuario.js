const db = require("../database/dbConnection");
const Usuario = require("../model/usuario");

exports.getAllData = async (req, res) => {
    const usuarios = await Usuario.findAll();

    res.status(200).json({
        msg: 'Datos obtenidos correctamente',
        usuarios
    })
}

exports.getDatosUsuario = async (req, res) => {
    const { dni } = req.params;

    const usuario = await Usuario.findOne({
        where: {
            dni
        }
    })
    if (usuario) {
        res.status(200).json({
            msg: 'Datos obtenidos correctamente',
            usuario
        })
    } else {
        res.status(404).json({
            msg: `No existe un usuario con dni ${dni}`
        })
    }
}

exports.postDatosUsuario = async (req, res) => {
    const { body } = req;

    try {
        const existeUsuario = await Usuario.findOne({
            where: {
                dni: body.dni
            }
        });

        if (existeUsuario) {
            return res.status(400).json({
                msg: `Ya existe un usuario con con el dni: ${dni}`
            });
        }

        const usuario = new Usuario(body);
        await usuario.save();

        res.status(201).json({
            msg: 'Datos generados correctamente',
            usuario
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al generar usuario'
        })
    }
}

exports.putDatosUsuario = async (req, res) => {
    const { dni } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findOne({
            where: {
                dni
            }
        })

        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el dni: ${dni}`
            })
        }

        await usuario.update(body);

        res.status(201).json({
            msg: 'Datos actualizados correctamente',
            usuario
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al actualizar usuario'
        })
    }
}

exports.deleteDatosUsuario = async (req, res) => {
    const { dni } = req.params;

    try {
        const usuario = await Usuario.findOne({
            where: {
                dni
            }
        })

        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el dni: ${dni}`
            })
        }

        await usuario.destroy();

        res.status(201).json({
            msg: 'Datos eliminados correctamente',
            usuario
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al eliminar usuario'
        })
    }
}
