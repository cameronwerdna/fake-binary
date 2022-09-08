//function takes a string of numbers and replaces them with a 1 or 0 based on their value (<5 becomes 0, >=5 becomes 1). returns changed numbers as a string.
function fakeBin(x){
    let binary = '';
    for(let i = 0; i < x.length; i++){
      (x[i] < 5) ? binary += 0 : binary += 1;
    }
    return binary;
  }

console.log(fakeBin('3456781157889')) // => 0011110011111
console.log(fakeBin('1985767329201489683226837')) // => 0111111001000011110001101