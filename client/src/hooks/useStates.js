import { useState } from 'react';

const useStates = (statesArray) => {
    const statesObj = {...statesArray }
    statesArray.map(state => statesObj[state] = useState(state.initValue))
    return statesObj
}

export default useStates;