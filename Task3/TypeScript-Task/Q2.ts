// Q2: Create a function to return the name (first, mid and last) of a candidate
// from an object or array then use and print the name.

// use template literals to combine names in one string => my name: [] [] []
// Function must accept object or array of string only
interface Candidate {
  first: string;
  mid: string;
  last: string;
}

const PrintCandidateFullName = (userName: Candidate | string[]): string => {
  if (Array.isArray(userName)) {
    if (userName.length != 3) {
      return "Array Full Name Must Be 3 Elements....";
    } else {
      return `Candidate Full Name: ${userName[0]} ${userName[1]} ${userName[2]}`;
    }
  } else {
    return `Candidate Full Name: ${userName.first} ${userName.mid} ${userName.last}`;
  }
};

const objTest: Candidate = {
  first: "Hidayah",
  mid: "Khalil",
  last: "Aljadaan",
};
const arrTest: string[] = ["Hidayah", "Khalil", "Aljadaan"];

console.log(PrintCandidateFullName(objTest));
console.log(PrintCandidateFullName(arrTest));
