const express = require('express')
const child_process = require('child_process')
const app = express()
const port = 3000

function getNowPlaying() {
    var child = child_process.spawnSync("mpc", [`--host=${process.env.MPCSERVER}`, "status"])
    var stdout = child.stdout.toString();
    var firstLine = stdout.split("\n")[0].trim();
    return firstLine
}

app.get('/now-playing', (req, res) => {
    res.send(getNowPlaying())
})

app.listen(port, () => console.log(`listening on port ${port}`))

