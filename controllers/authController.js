const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ error: 'Credenciales inválidas' });
        }
        const token = await generateJWT(user._id);
        res.json({ token, user: { id: user._id, name: user.name } });
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (await User.findOne({ email })) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }
        const user = new User({ name, email, password });
        await user.save();
        const token = await generateJWT(user._id);
        res.status(201).json({ token, user: { id: user._id, name: user.name } });
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
};