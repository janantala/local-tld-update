// An app’s API to ~/.local-tld.json
var fs = require("fs");

module.exports.tld_file = process.env.HOME + "/.local-tld.json";

module.exports.update = function update(name, port) {
  var map = read_json(module.exports.tld_file);
  for(var port_m in map) {
    var name_m = map[port_m].name;
    if(name_m == name) {
      delete map[port_m];
      map[port] = {};
      map[port].name = name;
      write_json(module.exports.tld_file, map);
      return true;
    }
  }

  map[port] = {};
  map[port].name = name;
  write_json(module.exports.tld_file, map);
  return false;
};

var read_json = function read_json(filename, default_value) {
  try {
    return JSON.parse(fs.readFileSync(filename));
  } catch(e) {
    return default_value || {};
  }
};

var write_json = function write_json(filename, value) {
  fs.writeFileSync(filename + ".tmp", JSON.stringify(value));
  fs.renameSync(filename + ".tmp", filename);
};
