//
// Simple querys for inspecting qshared documents
// 

//ASPECT:"qshare:shared" 
//ASPECT:"qshare:shared" AND @cm:creator:"ccl001"
//ASPECT:"qshare:shared" AND @qshare:sharedBy:"ccl001"
//ASPECT:"qshare:shared" AND @cm:modified:["2014-12-31" TO NOW]
//ASPECT:"qshare:shared" AND @cm:modified:[MIN TO "2013-12-31"]
//ASPECT:"qshare:shared" AND @cm:to:[MIN TO "2013-12-31"]
var def = {
   query: '+ASPECT:"qshare:shared"',
   language: "fts-alfresco"
};
var nodes = search.query(def);
var count = 0;
for each(var node in nodes) {
    count = count + 1;
    logger.warn(count + ": "+node.displayPath+"/"+node.name);           
    // Uncomment these two lines for unsharing
    //logger.log("[zk] Cleaning qshared aspect..");    
    //node.removeAspect("qshare:shared");
    //node.save();
    //logger.log("[zk] Done");                        
}