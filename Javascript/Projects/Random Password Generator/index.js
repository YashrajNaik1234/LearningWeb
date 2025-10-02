function generatepassword(len,includlowercase,includuppercase,includnum,includsymbols){
    const lowercasechars = "abcdefghijklmnopqrstuvxyz";
    const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchar = "012346789"
    const symbolschar = "!@#$%^&*()_+-="

    let allowedchar = "";
    let password = "";

    allowedchar += includlowercase ? lowercasechars : "";
    allowedchar += includuppercase ? uppercasechar : "";
    allowedchar += includnum ? numberchar : "";
    allowedchar += includsymbols ? symbolschar : "";

    console.log(allowedchar);

    if(len <= 0) return `(password length must be at least 1)`;
    if(allowedchar.length === 0) return `(At least set of character needs to be selected)`;
    
    for(let i = 0;i < len;i++){
        const randomind = Math.floor(Math.random() * allowedchar.length);
        password += allowedchar[randomind];
    }

    return password;
}

const passwordlen = 12;
const includlowercase = true;
const includuppercase = true;
const includnum = true;
const includsymbols = true;

const password = generatepassword(
  passwordlen,
  includlowercase,
  includuppercase,
  includnum,
  includsymbols
);

console.log(`Generated password : ${password}`);