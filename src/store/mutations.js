
const SET_TRACKER_CODE = (state, payload) => {
    state.TRACKER.CODE = payload;
};
const SET_PET_NAME = (state, payload) => {
    state.PET.name = payload;
};
const SET_PET_TYPE = (state, payload) => {
    state.PET.type = payload;
};
const SET_PET_GENDER = (state, payload) => {
    state.PET.gender = payload;
};
const SET_PET_BIRTHDAY = (state, payload) => {
    state.PET.birthday = payload;
};
const SET_PET_BREED = (state, payload) => {
    state.PET.breed = payload;
};
export default {
    SET_TRACKER_CODE,
    SET_PET_NAME,
    SET_PET_TYPE,
    SET_PET_GENDER,
    SET_PET_BIRTHDAY,
    SET_PET_BREED
};