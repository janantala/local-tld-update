# Local TLD Update

Update ``~/.local-tld.json`` from node.js app

See http://github.com/hoodiehq/local-tld for a description.

## I want my app to register itself with local-tld!

    var ltld = require("local-tld-update");
    ltld.update("project", server.address().port);

## License

The MIT License

Copyright (c) 2013 [Jan Antala](http://www.janantala.com)
