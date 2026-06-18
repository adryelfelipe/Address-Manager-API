class AuthController {
    login(req, res) {
        const teste = req.body
        res.status(200).json({message: "testando"})
    }

    register(req,res) {
        const teste = req.body
        res.status(200).json({message: "testando"})
    }
}

export default new AuthController();