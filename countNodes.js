function calculateNodes(stake, pokt, targetDays,startNodes) {
  let currentNode=startNodes;
  let days=0;
  while (true) {
    let cycleTime=stake/pokt/currentNode;
    days=days+cycleTime;
    if (days>targetDays) {
      break;
    }
    currentNode++;
  }
  return currentNode
}
module.exports=calculateNodes;
