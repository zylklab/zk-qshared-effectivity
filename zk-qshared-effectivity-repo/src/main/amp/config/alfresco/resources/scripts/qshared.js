//
// Script for quartz
// 
var def = {
   query: 'ASPECT:"qshare:shared" AND @cm\\:to:[MIN TO NOW]',
   language: "fts-alfresco"
};
var nodes = search.query(def);
//var nodes = search.luceneSearch('ASPECT:"qshare:shared" AND @cm\\:to:[MIN TO NOW]');
var count = 0;
logger.warn("[zk] Starting effectivity qshared:");
for each(var node in nodes) {
  count = count + 1;
  logger.warn(count + ": "+node.displayPath+"/"+node.name);
  logger.warn("[zk] This public url is expired --> "+node.properties["cm:to"]);
  logger.warn("[zk] Cleaning qshared aspect..");
  node.removeAspect("qshare:shared");
  //node.removeAspect("cm:effectivity");
  node.save();
}
logger.warn("[zk] Done.");