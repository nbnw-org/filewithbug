const { FILE_NAME } = require("./constant/appConstants");
const { templateRouter } = require("./templates/template_router");
const { readJSONFile } = require("./utils/read");

const root_dir = "constant";
readJSONFile(FILE_NAME, (err, jsonData) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  templateRouter(jsonData);
});
