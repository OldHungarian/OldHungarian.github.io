// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


$(function() {

  // [latin value, old hungarian value, priority when converting from latin, priority when converting to latin]
  var mapping = [
    ['A','𐲀',1,1],
    ['Á','𐲁',1,1],
    ['B','𐲂',1,1],
    ['AMB','𐲃',0,1],
    ['C','𐲄',1,1],
    ['ENC','𐲅',0,1],
    ['CS','𐲆',2,1],
    ['Cs','𐲆',2,0],
    ['D','𐲇',1,1],
    ['AND','𐲈',0,1],
    ['E','𐲉',1,1],
    ['Ë','𐲊',1,1],
    ['É','𐲋',1,1],
    ['F','𐲌',1,1],
    ['G','𐲍',1,1],
    ['GY','𐲎',2,1],
    ['Gy','𐲎',2,0],
    ['H','𐲏',1,1],
    ['I','𐲐',1,1],
    ['Í','𐲑',1,1],
    ['J','𐲒',1,1],
    ['K','𐲓',1,1],
    ['AK','𐲔',0,1],
    ['UNK','𐲕',0,1],
    ['L','𐲖',1,1],
    ['LY','𐲗',2,1],
    ['Ly','𐲗',2,0],
    ['M','𐲘',1,1],
    ['N','𐲙',1,1],
    ['NY','𐲚',2,1],
    ['Ny','𐲚',2,0],
    ['O','𐲛',1,1],
    ['Ó','𐲜',1,1],
    ['Ö','𐲝',0,1],
    ['Ö','𐲞',1,1],
    ['Ő','𐲟',1,1],
    ['P','𐲠',1,1],
    ['EMP','𐲡',0,1],
    ['R','𐲢',1,1],
    ['R','𐲣',0,1],
    ['S','𐲤',1,1],
    ['SZ','𐲥',2,1],
    ['Sz','𐲥',2,0],
    ['T','𐲦',1,1],
    ['ENT','𐲧',0,1],
    ['TY','𐲨',2,1],
    ['Ty','𐲨',2,0],
    ['ECH','𐲩',0,1],
    ['U','𐲪',1,1],
    ['Ú','𐲫',1,1],
    ['Ü','𐲬',1,1],
    ['Ű','𐲭',1,1],
    ['V','𐲮',1,1],
    ['Z','𐲯',1,1],
    ['ZS','𐲰',2,1],
    ['Zs','𐲰',2,0],
    ['ENT','𐲱',0,1],
    ['US','𐲲',0,1],
    ['a','𐳀',1,1],
    ['á','𐳁',1,1],
    ['b','𐳂',1,1],
    ['amb','𐳃',0,1],
    ['c','𐳄',1,1],
    ['enc','𐳅',0,1],
    ['cs','𐳆',2,1],
    ['d','𐳇',1,1],
    ['and','𐳈',0,1],
    ['e','𐳉',1,1],
    ['ë','𐳊',1,1],
    ['é','𐳋',1,1],
    ['f','𐳌',1,1],
    ['g','𐳍',1,1],
    ['gy','𐳎',2,1],
    ['h','𐳏',1,1],
    ['i','𐳐',1,1],
    ['í','𐳑',1,1],
    ['j','𐳒',1,1],
    ['k','𐳓',1,1],
    ['ak','𐳔',0,1],
    ['unk','𐳕',0,1],
    ['l','𐳖',1,1],
    ['ly','𐳗',2,1],
    ['m','𐳘',1,1],
    ['n','𐳙',1,1],
    ['ny','𐳚',2,1],
    ['o','𐳛',1,1],
    ['ó','𐳜',1,1],
    ['ö','𐳝',0,1],
    ['ö','𐳞',1,1],
    ['ő','𐳟',1,1],
    ['p','𐳠',1,1],
    ['emp','𐳡',0,1],
    ['r','𐳢',1,1],
    ['r','𐳣',0,1],
    ['s','𐳤',1,1],
    ['sz','𐳥',2,1],
    ['t','𐳦',1,1],
    ['ent','𐳧',0,1],
    ['ty','𐳨',2,1],
    ['ech','𐳩',0,1],
    ['u','𐳪',1,1],
    ['ú','𐳫',1,1],
    ['ü','𐳬',1,1],
    ['ű','𐳭',1,1],
    ['v','𐳮',1,1],
    ['z','𐳯',1,1],
    ['zs','𐳰',2,1],
    ['ent','𐳱',0,1],
    ['us','𐳲',0,1],

    ['DZ','𐲇‍𐲯',2,2],
    ['Dz','𐲇‍𐲯',2,0],
    ['DZS','𐲇‍𐲰',3,2],
    ['DzS','𐲇‍𐲰',3,0],
    ['DZs','𐲇‍𐲰',3,0],
    ['Dzs','𐲇‍𐲰',3,0],
    ['Q','𐲓‍𐲮',1,2],
    ['W','𐲮‍𐲮',1,2],
    ['X','𐲓‍𐲥',1,2],
    ['Y','𐲒‍𐲐',1,2],
    ['dz','𐳇‍𐳯',2,2],
    ['dzs','𐳇‍𐳰',3,2],
    ['q','𐳓‍𐳮',1,2],
    ['w','𐳮‍𐳮',1,2],
    ['x','𐳓‍𐳥',1,2],
    ['y','𐳒‍𐳐',1,2],

    [':',':\u200f',1,0,{ltr:false}],
    ['\\.','.\u200f',1,0,{ltr:false}],
    ['!','!\u200f',1,0,{ltr:false}],

    [',','⹁\u200f',1,0,{ltr:false}],
    [';','⁏\u200f',1,0,{ltr:false}],
    ['\\?','⸮\u200f',1,0,{ltr:false}],
    ['„','⹂\u200f',1,0,{ltr:false}],
    ['”','“\u200f',1,0,{ltr:false}],

    [',','⹁',0,1],
    [';','⁏',0,1],
    ['?','⸮',0,1],
    ['„','⹂',0,1],
    ['”','“',0,1],
  ];

  var numbers = {
    1: '𐳺',
    5: '𐳻',
    10: '𐳼',
    50: '𐳽',
    100: '𐳾',
    1000: '𐳿'
  };

  var getSettings = function() {
    var useLtr = $("#converter-settings-ltr-mode").is(':checked');
    var useLig = $("#converter-settings-use-ligatures").is(':checked');

    return {ltr: useLtr, lig: useLig};
  }

  var convertToOldHungarian = function() {
    var text = $("#converter-latin").val();
    var result = text;
    var settings = getSettings();

    // remove any RTL and LTR override
    result = result.replace(/\u202e/g,'');
    result = result.replace(/\u202d/g,'');
    result = result.replace(/\u200f/g,'');

    // convert the values in descending priority order. Skip anything that has 0 priority for the conversion
    for (var s = 5; s >= 1; s--) {
      for (var i = 0; i < mapping.length; i++) {
        if (mapping[i][2]==s) {
          if (!mapping[i][4] || (!mapping[i][4].ltr && !settings.ltr)) {
            result = result.replace(new RegExp(mapping[i][0],'g'),mapping[i][1]);
          }
        }
      }
    }

    // convert numbers
    result = result.replace(/\d+/g,function(match) {
      var num = +match;
      if (num>=1000000) return match; // we won't handle numbers larger than a million
      if (num==0) return match; // we won't handle zero

      var resp = '';

      var thousands = Math.floor(num / 1000);
      var rest = num % 1000;

      var convertUpToHundred = function(num) {
        var resp = '';
        var tens = Math.floor(num / 10);
        var ones = num % 10;

        if (tens>=5) {
          resp += numbers[50];
          tens -= 5;
        }

        for (var i=0; i<tens; i++) resp += numbers[10];

        if (ones>=5) {
          resp += numbers[5];
          ones -= 5;
        }

        for (var i=0; i<ones; i++) resp += numbers[1];

        return resp;
      }

      var convertUpToThousand = function(num) {
        var resp = '';
        var hundreds = Math.floor(num / 100);
        var rest = num % 100;

        if (hundreds >= 2) {
          resp = resp + convertUpToHundred(hundreds) + numbers[100];
        }
        if (hundreds == 1) {
          resp = resp + numbers[100];
        }

        resp = resp + convertUpToHundred(rest);

        return resp;
      };

      if (thousands>=2) {
        resp = resp + convertUpToThousand(thousands) + numbers[1000];
      }
      if (thousands == 1) {
        resp = resp + numbers[1000];
      }

      resp = resp + convertUpToThousand(rest);

      return resp;
    });

    if (!settings.lig) {
      result = result.replace(/\u200d/g,'');
    }

    if (settings.ltr) {
      $("#converter-old-hungarian").removeClass("force-rtl").addClass("force-ltr");
    } else {
      $("#converter-old-hungarian").removeClass("force-ltr").addClass("force-rtl");
    }

    $("#converter-old-hungarian").val(result);
  };

  var convertToLatin = function() {
    var text = $("#converter-old-hungarian").val();

    var result = text;

    // remove any RTL and LTR override and RTL mark
    result = result.replace(/\u202e/g,'');
    result = result.replace(/\u202d/g,'');
    result = result.replace(/\u200f/g,'');

    // convert the values in descending priority order. Skip anything that has 0 priority for the conversion
    for (var s = 5; s >= 1; s--) {
      for (var i = 0; i < mapping.length; i++) {
        if (mapping[i][3]==s) {
          result = result.replace(new RegExp(mapping[i][1],'g'),mapping[i][0]);
        }
      }
    }

    $("#converter-latin").val(result);
  };

  $("#converter-latin").on("keyup change",function() { convertToOldHungarian(); });
  $("#converter-old-hungarian").on("keyup change",function() { convertToLatin(); });
  $("[type=checkbox]").on("change",function() { convertToOldHungarian(); });

  convertToOldHungarian();
});
