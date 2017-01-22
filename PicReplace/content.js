var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}

var sourceWordsToTargetWords = [
    [['Donald Trump', 'Trump', 'Donald J. Trump', 'Mr. Trump'], 'Kanye'],
];

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/donald_trump/gi,"kanye2020");
            //var replacedText1 = text.replace(/Trump/gi, "#kanye2020");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
                //element.replaceChild(document.createTextNode(replacedText1), node);
            }
        }
    }
}
