const testIds = [ 'TC-101', 'TC-205', 'TC-101', 'TC-310', 'TC-205', 'TC-101'];



for (let i= 0;i<=testIds.length;i++){

    for(let j=i+1;j<testIds.length;j++){

        if(testIds[i] === testIds[j]){

            console.log("duplicate test Id is:",testIds[i]);
        }
    }
}