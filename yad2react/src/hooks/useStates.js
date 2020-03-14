import { useState } from 'react';

const useStates = (statesArray) => {
    // console.log(statesArray);
    
    const statesObj = {...statesArray }
    console.log(statesObj);
    statesArray.map(state => statesObj[state] = useState(state.initValue))
    // for (let state in statesArray) {
    //     statesObj[state] = useState(state.initValue);
    // }
    return statesObj
}

export default useStates;