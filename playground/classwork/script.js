function isFifty(firstNum, secondNum){
    if(firstNum == 50 || secondNum == 50){
        return true;
    }else if(firstNum + secondNum == 50){
        return true;
    }
    else return false;
}

function isPositiveAndNegative(firstNum, secondNum){
    if(firstNum < 0 && secondNum > 0){
        return true;
    }else if(firstNum > 0 && secondNum < 0){
        return true;
    }else return false;
}

function areaOfTriangle(first, second, third){
    var semiPerimeter = (first + second + third)/2;

    var area = Math.sqrt(semiPerimeter * (semiPerimeter - first) * (semiPerimeter - second) * (semiPerimeter - third));

    return area;
}

function toArray(first, second, third, fourth, fifth){
    list = [first, second, third, fourth, fifth];
    return list
}

function addWithSubCharge(amount){
    if(amount < 11){
        return amount + 1;
    }else return amount + 2;
}

function rotateArray(list){
    var temp = list[0]
    for (let index = 0; index < list.length - 1; index++) {
            list[index] = list[index + 1];
    }
    list[list.length - 1] = temp;

    return list;
}

function computeSum(first, second){
    if(first == second){
        return (first + second) * 3;
    }
    else return first + second;
}

function getFirstElement(list){
    return list[0];
}

function getFirstElement(list, num){
    while(list.length > num){
        list.pop();
    }
    return list;
}

function joinArrayElements(list){
    var string = "";
    for (let index = 0; index < list.length - 1; index++) {
        string.concat(list[index]).concat(", ")   
    }
    string.concat(list[list.length - 1]);

    return string;
}

function calculateSum(list){
    let sum  = 0;
    for (let index = 0; index < list.length; index++) {
        sum += array[index];
    }
    return sum;
}

function calculateProduct(list){
    let product  = 1;
    for (let index = 0; index < list.length; index++) {
        sum *= array[index];
    }
    return product;
}

function sandwichCalculator(slicesOfBread){
    return ~~(slicesOfBread / 2);
}

function sandwichCalculator(slicesOfBread, slicesOfCheese){
    if((~~(slicesOfBread / 2)) == slicesOfCheese){
        return ~~(slicesOfBread / 2);
    }else if((~~(slicesOfBread / 2)) < slicesOfCheese){
        return ~~(slicesOfBread / 2);
    }else {
        return slicesOfCheese;
    }
}


function maxValue(list){
    var max = list[0];
    for (let index = 1; index < lsit.length; index++) {
        if(max < list[index])
        max = list[index];
    }
    return max;
}

function minValue(list){
    var min = list[0];
    for (let index = 1; index < lsit.length; index++) {
        if(min > list[index])
        min = list[index];
    }
    return min;
}

function sumOfOdd(list){
    let sum = 0;
    for (let index = 0; index < list.length; index++) {
        if(list[index] % 2 == 1){
            sum += list[index];
        }
    }
    return sum;
}

function productOfOdd(list){
    let product = 1;
    for (let index = 0; index < list.length; index++) {
        if(list[index] % 2 == 1){
            product *= list[index];
        }
    }
    return sum;
}

function removeDuplicates(list){
   var newList = [];
    for (let index = 0; index < list.length; index++) {
        let isDuplicate = false;
        for (let i = index + 1; i < list.length; i++) {
            if(list[index] ==  list[i]){
                isDuplicate = true;
            }
     
        }
        if(!isDuplicate){
            newList.splice(0, list[index]);
        }
        
    }
    return newList;
}

document.write(removeDuplicates([1,4,5,7,5,3,1,6,9,11,23,11,23,56,78,5,4,3]));