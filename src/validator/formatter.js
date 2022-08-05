const str = function(){
    const ar = "  functionUp  ";
    const plu = ar.trim();
    console.log(plu);
}

const pol = function(){
    const na = "functionUp";
    const tol = na.toUpperCase();
    console.log(tol);
}

const nol = function(){
    const pa = "FUNCTIONUP";
    const aol = pa.toLowerCase();
    console.log(aol);
}
module.exports.str=str;
module.exports.pol=pol;
module.exports.nol=nol;