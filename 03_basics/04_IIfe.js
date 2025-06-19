// immidiately Invoked Function Expressions (IIFE)
(function chai () { // named IIFE
    console.log(`DB CONNNECTED`);
})();

( (num) => {
    console.log(`DB 2 CONNECTED , ${num}`);
} )('number hai ye')