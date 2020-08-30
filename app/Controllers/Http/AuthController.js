'use strict'

const User = use('App/Models/User')

class AuthController {
    async register ({ request }) {
        const data = request.only(['username', 'password']);

        const user = await User.create(data);

        return user;
    }

    async authenticate ({ request, response, auth }) {
        const { username, password } = request.all();

        await auth.attempt(username, password);

        return response.json("Logado com sucesso");
    }
}

module.exports = AuthController
