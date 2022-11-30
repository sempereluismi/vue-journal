

import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-modules-8d1ec-default-rtdb.firebaseio.com'
})


export default journalApi