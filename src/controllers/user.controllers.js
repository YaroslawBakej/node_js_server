const express = require('express')
const { isValidId, isValidUser } = require('../helper/validation')
const { getUser, getUserById, updateUser } = require('../services/user.service')

const router = express.Router()

router.get('/', (req, res) => {
    try {
        const users = getUser()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/:id', isValidId, (req, res) => {
    try {
        const { id } = req.params
        const users = getUserById(id)
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/',isValidUser, (req, res) => {
    try {


    } catch (error) {
        res.status(500).send('123')
    }
})

router.put('/:id',isValidId, isValidUser, (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, email, pwd } = req.body

        res.status(200).send(updateUser(id, name, surname, email, pwd))
    } catch (error) {
        res.status(500).send('123')
    }
})

router.delete('/:id', (req, res) => {
    try {
        res.status(200).send('123')
    } catch (error) {
        res.status(500).send('123')
    }
})



module.exports = router