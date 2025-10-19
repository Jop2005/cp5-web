import { defineStore } from "pinia";
import { ref } from "vue";

export const useEstudentStore =  defineStore('estudent', () => {
    const estudents = ref([])
    


const addEstudent = (estudentData) => {
    console.log(estudentData);
    
    estudents.value.push({
       ...estudentData
    })
}

return {estudents, addEstudent}
})