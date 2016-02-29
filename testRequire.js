var toolFunc         = require("./tool-function.js");
var OutputMessage    = toolFunc.OutputMessage;
var getSubString     = toolFunc.getSubString;

var id = '/NewUserID_1#UaXifWW--JYCRu41AAAA';

OutputMessage("Original String: " + id);
OutputMessage("SubString: " + getSubString(id, '/', '#'));