const app = require('./src/app')
const package = require('./package.json')
const PORT = 3030
app.listen(PORT, () => console.log(`${package.name} rodando na ${PORT}`))