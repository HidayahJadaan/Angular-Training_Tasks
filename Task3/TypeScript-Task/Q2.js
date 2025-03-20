// Q2: Create a function to return the name (first, mid and last) of a candidate
// from an object or array then use and print the name.
var PrintCandidateFullName = function (userName) {
    if (Array.isArray(userName)) {
        if (userName.length != 3) {
            return "Array Full Name Must Be 3 Elements....";
        }
        else {
            return "Candidate Full Name: ".concat(userName[0], " ").concat(userName[1], " ").concat(userName[2]);
        }
    }
    else {
        return "Candidate Full Name: ".concat(userName.first, " ").concat(userName.mid, " ").concat(userName.last);
    }
};
var objTest = { first: "Hidayah", mid: "Khalil", last: "Aljadaan" };
var arrTest = ["Hidayah", "Khalil", "Aljadaan"];
console.log(PrintCandidateFullName(objTest));
console.log(PrintCandidateFullName(arrTest));
