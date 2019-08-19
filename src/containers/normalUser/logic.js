export const openNewCaseModal = (changeState) => {
    changeState("openNewCaseModal", true)
}

export const closeNewCaseModal = (changeState) =>{
    changeState("openNewCaseModal", false)
}