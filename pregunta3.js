// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined
 
const greater3 = nums => {
    if (nums.length >= 3) {
        nums.sort((greater,lower) => greater > lower ?-1 :1)
        borrarDuplicados(nums);
        if (nums.length >=3){
        return nums[3]
        }
        else{
            return undefined
        }
    } else {
        return undefined
    }
}
const borrarDuplicados = nums => {
    let numeros =[]
    for (var i = 1; i < nums.length-1; i++){
        if( nums[i] != nums[i-1]){
         numeros.push(nums[i])
        }
    }
    return numeros
}
// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === 4);
console.log(greater3([1,1,2,5]) === 1);