const { TEMPLATE_KEYS } = require("../constant/templateConstants")

function handleSENTemplate(json_file) {
    console.log("user is notified: ", json_file[TEMPLATE_KEYS.MENTION_USER])
}

module.exports = {handleSENTemplate}