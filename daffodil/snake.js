let snake = "snake_casing_variable";
let camel = "snakeCasingVariable";

function convertCases(str){
    if(str.split("_").length > 1){
        console.log("if",str)
        let strArray = str.split("_");
        let camelCaseStr = strArray[0];
        for(let i = 1;i < strArray.length;i++){
            let newWord = strArray[i].replace([...strArray[i]][0],[...strArray[i]][0].toUpperCase());
            camelCaseStr += newWord
        }
        console.log(camelCaseStr);
    }else {
        console.log("else")
        const snakeCase = [...str].map((char) => {
            if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
              const newChar = char.replace(char,'_'+char.toLowerCase())
              return newChar;
            }  
            return char;
        })
        console.log(snakeCase.join(''))
    }

}

convertCases(camel)