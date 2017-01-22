var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}


var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace("Donald Trump","kanye2020");
            var replacedText1 = text.replace("Donald John Trump", "kanye2020");
            var replacedText2 = text.replace("Donald J. Trump", "kanye2020");
            var replacedText3 = text.replace("Trump", "kanye2020");
            var replacedText4 = text.replace("Mr. Trump", "kanye2020");


            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
            else if(replacedText1 !== text){
              element.replaceChild(document.createTextNode(replacedText1), node);
            }
            else if(replacedText2 !== text){
              element.replaceChild(document.createTextNode(replacedText2), node);
            }
            else if(replacedText3 !== text){
              element.replaceChild(document.createTextNode(replacedText3), node);
            }
            else if(replacedText4 !== text){
              element.replaceChild(document.createTextNode(replacedText4), node);
            }
        }
    }
}
