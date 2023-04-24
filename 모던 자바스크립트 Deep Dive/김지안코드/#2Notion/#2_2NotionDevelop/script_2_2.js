const Arr = [];

let NotionObject = { };
// 안의 내용 삭제
// add에서 notion, meaning, url 프로퍼티 추가되도록

// 수정하는 기능을 따로 함수로 뺐으면 좋았을 듯
function add(){
  let n = Arr.length;     // const 사용 + 전역변수 삭제 위함
  Arr[n] = Object.assign({}, NotionObject);
  const input =  String(document.getElementById("notion").value);
  if(input.length < 1){
    alert("notion is nessesary");
    return;
  }
  // 삼항 연산자로 변경
  // whyrano...
  // searchIndex 안 쓰고 비교하고 있었네ㅋㅋㅋㅋ
  const index = searchIndex(input);
  index == -1 ? n = n : n = index;
  Arr[n].notion = String(document.getElementById("notion").value);
  Arr[n].meaning = verify(String(document.getElementById("meaning").value));
  Arr[n].url = verify(String(document.getElementById("url").value));
  return;
}

function showAll(){
  Arr.forEach(showResult);
}

function showResult(notionObject) {
  for (const key in notionObject) {
    document.write(key + ": " + notionObject[key] + "<br>");
  }
  document.write("<br>");
}

function search() {
  const keyword = String(document.getElementById("search").value); // var → const
  if(keyword.length < 1){
    alert("keyword is nessessary");
    return;
  }
  const index = searchIndex(keyword); // var → const

  if(index != -1){
    alert(keyword + " is number " + index+1);
    return;
  }
  alert("There is no notion named " + keyword);
  return;
}

function searchIndex(keyword) {
  const n = Arr.length;
  for(let i = 0; i < n; i++){       // var → let
    if(Arr[i].notion === keyword){  // == > ===
      return i;
    }
  }
  return -1;
}

function verify(input) {
  if (input.length < 1)
    return "undefined yet";
  return input;
}