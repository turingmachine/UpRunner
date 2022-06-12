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

const year1 = calculateNodes(15100, 25, 90, 1000)
const year2 = calculateNodes(15100, 25, 365, year1)
const year3 = calculateNodes(15100, 25, 365, year2)
const year4 = calculateNodes(15100, 25, 365, year3)
const year5 = calculateNodes(15100, 25, 365, year4)
const year6 = calculateNodes(15100, 25, 365, year5)


console.log(year1, year2, year3, year4, year5, year6)
