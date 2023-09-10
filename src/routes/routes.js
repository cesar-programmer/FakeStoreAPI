import products from './products.routes.js'

import { Router } from 'express'

const router = Router()

router.use('/products', products)

router.get('/', (req, res) => {
  res.send('Hello World! soy cesar perros')
})

export default router
