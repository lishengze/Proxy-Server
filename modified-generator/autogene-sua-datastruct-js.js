var fs = require('fs');
var jsonContent=require("./package.json");
var fileData ="";

var reqParamNumb = 0; //jsonContent.FTD.fields[0].fieldDefine.length;
while(jsonContent.FTD.fields[0].fieldDefine[reqParamNumb].$.name!=="SysNetNonPartyLinkInfo"){//SysNetNonPartyLinkInfo之后的不需要
     ++reqParamNumb;
}
reqParamNumb++;

 for(var i=0;i<reqParamNumb;i++) {
     var reqParamName  = jsonContent.FTD.fields[0].fieldDefine[i].$.name;
     var reqParamFiledname = "CShfeFtdc" + reqParamName + "Field";
     var reqParamPropertyNumb = jsonContent.FTD.fields[0].fieldDefine[i].item.length;
     fileData += "var " + reqParamFiledname + " = function() {\n";     
          
     for(var j = 0; j < reqParamPropertyNumb; j++) {
         var StringTypeLength=jsonContent.FTD.types[0].String.length;
         var ArrayTypeLength=jsonContent.FTD.types[0].Array.length;
         var VStringTypeLength=jsonContent.FTD.types[0].VString.length;
         var itemType = jsonContent.FTD.fields[0].fieldDefine[i].item[j].$.type.substring(1, jsonContent.FTD.fields[0].fieldDefine[i].item[j].$.type.length - 4);

         var intValueNumb = 0;//用以判断是否在Int类型中找到对象。若为1则找到；         
         for(var k=0;k<StringTypeLength;k++){
             if(itemType===jsonContent.FTD.types[0].String[k].$.typename)
               {
                 intValueNumb++;
                 fileData += "  this." + jsonContent.FTD.fields[0].fieldDefine[i].item[j].$.name + "=\" \";\n";
                 break;
               }
         }
         for(var k=0;k<ArrayTypeLength;k++){
             if(itemType===jsonContent.FTD.types[0].Array[k].$.typename)
             {
                 intValueNumb++;
                 fileData += "  this." + jsonContent.FTD.fields[0].fieldDefine[i].item[j].$.name + "=\" \";\n";
                 break;
             }
         }
         for(var k=0;k<VStringTypeLength;k++){
             if(itemType===jsonContent.FTD.types[0].VString[k].$.typename)
             {
                 intValueNumb++;
                 fileData += "  this." + jsonContent.FTD.fields[0].fieldDefine[i].item[j].$.name + "=\" \";\n";
                 break;
             }
         }
         if(intValueNumb===0) {
             fileData += "  this." + jsonContent.FTD.fields[0].fieldDefine[i].item[j].$.name + "=0;\n";
         }
     }
     fileData += "};\n\n";
 }
 
 
for(var i=0;i<reqParamNumb;i++) {
     var reqParamName  = jsonContent.FTD.fields[0].fieldDefine[i].$.name;
     var reqParamFiledname = "CShfeFtdc" + reqParamName + "Field";
     var reqParamPropertyNumb = jsonContent.FTD.fields[0].fieldDefine[i].item.length;
     fileData += "exports." + reqParamFiledname + " = " + reqParamFiledname + ";\n\n";              
 }

var pathName = '../new file/';
var fileName = 'SysUserApiStruct.js';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {            
        console.log('Succeed in saving ' + pathName + fileName);
    }

});