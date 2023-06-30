const { Nuxt } = require('nuxt-start')
const config = require('./nuxt.config.js')

async function start() {
  const nuxt = new Nuxt(config)
  await nuxt.ready()
  nuxt.server.listen()
}

start()
