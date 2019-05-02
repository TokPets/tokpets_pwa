

const setTrackerCode = (context, payload) => {
    context.commit('SET_TRACKER_CODE', payload);
};
const setPetName = (context, payload) => {
    context.commit('SET_PET_NAME', payload);
};
const setPetType = (context, payload) => {
    context.commit('SET_PET_TYPE', payload);
};
const setPetGender = (context, payload) => {
    context.commit('SET_PET_GENDER', payload);
};
const setPetBirthday = (context, payload) => {
    context.commit('SET_PET_BIRTHDAY', payload);
};
const setPetBreed = (context, payload) => {
    context.commit('SET_PET_BREED', payload);
};

export default {
    setTrackerCode,
    setPetName,
    setPetType,
    setPetGender,
    setPetBirthday,
    setPetBreed
};