import { toInvite } from '@/api/register';
import modelData from '@/views/register/model-data';
import { ModelInfo, InvitationInfo, VuexState } from '@/types/invitation';

const state = {
  token: '',
  modelData: modelData,
};
const getters = {
  curData: function (state: { status: number; modelData: ModelInfo }) {
    return state.modelData[state.modelData.status];
  },
  status: function (state: { status: number; modelData: ModelInfo }) {
    return state.modelData.status;
  },
  token: function (state: { token: string }) {
    return state.token;
  },
};

const mutations = {
  setToken: (state: { token: string }, token: string) => {
    state.token = token;
  },
  changeStatus: (state: { modelData: ModelInfo }, status: number) => {
    state.modelData.status = status;
  },
};
const actions = {
  getInvitation({ state }: VuexState, data: InvitationInfo) {
    console.log(state);
    return toInvite(data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
