export let state;
let counter = 0;

export function managePets(state ={pets: []}, action){
    switch(action.type){
        case "ADD_PET":
            state = {pets: [...state.pets, action.pet]}
            return state
        case "REMOVE_PET":
            let newState = [{pets: [...state.pets]}]
            let remove = newState[0].pets.filter((pet)=>{
            if (pet.id !== action.id){
                return pet
            }
        })
        return {pets: remove}
    default:
    return state;
    }
}

export function dispatch(action){
   state = managePets(state, action)
    render()
}

export function render(){
    let div = document.querySelector("#container")
    if(counter < state.pets.length){
        let list = document.createElement("ul") 
        let listItem = document.createElement("li")
        listItem.innerHTML = `${state.pets[counter].name}`
        div.appendChild(list)
         list.appendChild(listItem)
         counter+=1;
    }  
   } 
