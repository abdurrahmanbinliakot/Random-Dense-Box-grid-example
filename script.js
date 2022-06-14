div_item = document.getElementsByTagName("DIV");
function create_class_name() {
    for(var i=0; i<=div_item.length; i++){
        div_item[i].className =randClassName()
    }
}

function randClassName() {
  const data = [ "normal","harizantal","vertical","big",];
  return data[Math.floor(Math.random() * data.length)];
}
