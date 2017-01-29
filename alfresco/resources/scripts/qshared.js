//
// Script for quartz
// 

//var today  = new Date();
//var month  = today.getMonth() + 1;
//var day    = today.getDate();
//var year   = today.getFullYear();
//var mydate = year+"-"+month+"-"+day;
//var nodes  = search.luceneSearch('ASPECT:"qshare:shared" AND @cm\\:to:"'+mydate+'"');
var nodes = search.luceneSearch('ASPECT:"qshare:shared" AND @cm\\:to:[MIN TO NOW]');
var count = 0;
logger.warn("[zk] Starting effectivity qshared:");
for each(var node in nodes) {
  count = count + 1;
  logger.warn(count + ": "+node.displayPath+"/"+node.name);
  logger.warn("[zk] This public url is expired --> "+node.properties["cm:to"]);
  logger.warn("[zk] Cleaning the aspect..");
  node.removeAspect("qshare:shared");
  //node.removeAspect("cm:effectivity");
  node.save();
}
logger.warn("[zk] Done.");