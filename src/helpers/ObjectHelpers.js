export function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function oneIsEmpty() {
    console.log(arguments);
}

let findChildResult = -1;
export function findChild(parent, target, firstClick) {
    if(firstClick !== undefined) findChildResult = -1;
    if(findChildResult !== -1) return findChildResult;
    
    parent.childNodes.forEach(child => {
        if (child !== target) {
            return findChild(child, target);
        } else {
            findChildResult = child;
            return;
        }
    })

    return findChildResult
}