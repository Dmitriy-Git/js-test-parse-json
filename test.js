let obj = {
    displayedName: {
        displayedName: {
            value: [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            description: "Полное наименование товара для клиента"
            }
        },
    stock: {
        stocks: {
                34: {
                2: 35,
                3:42,
                4: 58,
                5: 57,
                6: 112,
                20: 51,
                22: 78,
                26: 34,
                32: 22,
                35: 358,
                40: 28,
                43: 68,
                45: 58,
                49: 31,
                51: 29,
                56: 42,
                62: 26,
                64: 0,
                65: 57,
                86: 15,
                114: 41,
                117: 46,
                143: 46,
                162: 4,
                171: 0,
                176: 12
            
            }
        }
    }
}


const getPriceName = (index) => {
    return obj.displayedName.displayedName.value[index]
}

console.log(getPriceName(0))

const gerArray = (regionNumber) => {
    const newObj = obj.stock.stocks[regionNumber]
    const newArray = Object.keys(newObj) 
    return newArray
}

console.log(gerArray(34))


const getMaxPrice = () => {

    const 
        newObj = obj.stock.stocks[34],
        newValue = Object.values(newObj),
        newKeys = Object.keys(newObj)
    
    let 
        a  = Math.max.apply( Math, newValue ),
        searchValue, 
        searchIndex,
        arrReturn 

    newValue.forEach( (item, index) => {   
        if(item === a) {
            searchIndex = index 
            searchValue = item
        } 
    })

    newKeys.forEach( (item, index) => {
        if(index === searchIndex) searchIndex = item
    })
   
    arrReturn  = {searchIndex, searchValue}
 
    return arrReturn
}


console.log(getMaxPrice())
