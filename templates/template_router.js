const { TEMPLATE_KEYS } = require("../constant/templateConstants");
const { handleSENTemplate } = require("./sen");

const SUPPORTED_TEMPLATES_ROUTER = {
    "sen": handleSENTemplate,
};

templateRouter = async (json_file) => {    
    if(json_file[TEMPLATE_KEYS.TEMPLATE] in SUPPORTED_TEMPLATES_ROUTER) {
        await SUPPORTED_TEMPLATES_ROUTER[json_file[TEMPLATE_KEYS.TEMPLATE]](json_file);
        
    } else {
        console.log("Unsupported Template! Please use one of the following.", SUPPORTED_TEMPLATES_ROUTER);
        throw Error("Unsupported Template");
    }
}