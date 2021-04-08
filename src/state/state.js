import TestData from "../../static/mock/data.json";
let answerdata = {}
answerdata['name'] = TestData['name'];
answerdata['date'] = TestData['date'];
answerdata['answer'] = [];
TestData.answer.forEach(e => {
  let count = 0;
  for(let i in e){
    if(e[i] === 'a'){
      count++;
    }else if(e[i] === 'b'){
      count+=0.5;
    }
  }
  let item = {}
  item['type'] = e['type'];
  item['grade'] = count;
  answerdata['answer'].push(item);
})
export default {
  answerdata
}