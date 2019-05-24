function* getHobbies(action) {
    // PERSON of hobbies
    axios.get(`/person/hobbies/${action.payload}`)
    // Hobbies of people
    axios.get(`/person/hobbies/?hobby=${action.payload}`)
    axios.get(`/person/hobbies/${action.payload.person}?hobby=${action.payload.hobby}`)
}
