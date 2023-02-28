var t = 0,
adj = ['in green', 'in gold', 'in silver', 'lean', 'merry', 'in red', 'swift', 'cruel', 'crouched', 'famished'],
noun = ['love', 'horse', 'dawn', 'dreams', 'water', 'bugle', 'sleep', 'deer', 'arrow', 'mountain', 'death', 'hunter', 'peaks'],
verb = ['riding', 'smiling', 'singing', 'crouching', 'falling'];

function rand_range(maximum) {
    "use strict";
    return Math.floor(Math.random() * (maximum + 1));
}
function choose(array) {
    "use strict";
    return array[rand_range(array.length - 1)];
}
function stanza() {
    "use strict";
    return 'all ' + choose(adj) + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; went my ' + choose(noun) + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' + choose(verb) + '<br>';
}
function litany() {
    "use strict";
    var last, text, main = document.getElementById('main');
    if (8 > t) {
        t += 1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    last = document.createElement('div');
    last.innerHTML = stanza();
    main.appendChild(last);
}
function produce_litany() {
    "use strict";
    litany();
    setInterval(litany, 10000);
}