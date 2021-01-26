import {
    fetchURL
} from "./variableInit.js"

import {
    dataJson
} from "./fetchData.js"


const runMain = () => {
    dataJson(fetchURL);
}

export {
    runMain
}
