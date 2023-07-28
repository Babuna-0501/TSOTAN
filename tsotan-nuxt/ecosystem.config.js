<<<<<<< HEAD
module.exports = {
    apps: [
      {
        name: 'tsotan',
        script: 'npm',
        args: 'start',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production'
        }
      }
    ]
  };
=======
module.exports = {
    apps: [
      {
        name: 'tsotan',
        script: 'npm',
        args: 'start',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production'
        }
      }
    ]
  };
>>>>>>> origin/nuxt
  