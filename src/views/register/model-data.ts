import { ModelInfo, ModelStatus } from '@/types/invitation';
const modelData: ModelInfo = {
  status: ModelStatus.Initial,
  [ModelStatus.Initial]: {
    isVisible: false,
    form: {
      title: 'Request an invite',
      button: {
        text: 'Send',
        loading: false,
      },
    },
  },
  [ModelStatus.Toinvitate]: {
    isVisible: true,
    form: {
      title: 'Request an invite',
      button: {
        text: 'Send',
        loading: false,
      },
    },
  },
  [ModelStatus.Invitating]: {
    isVisible: true,
    form: {
      title: 'Request an invite',
      button: {
        text: 'Sending, please wait...',
        loading: true,
      },
    },
  },
  [ModelStatus.InvitatedOk]: {
    isVisible: true,
    form: {
      title: 'Request an invite',
      button: {
        text: 'Sending, please wait...',
        loading: true,
      },
    },
  },
  [ModelStatus.InvitatedError]: {
    isVisible: true,
    form: {
      title: 'Request an invite',
      button: {
        text: 'Send',
        loading: false,
      },
      errorMessage: '',
    },
  },
  [ModelStatus.InvitatedOk]: {
    isVisible: true,
    form: {
      title: 'All done!',
      button: {
        text: 'ok',
        loading: false,
      },
      okMessage:
        'You will be one of the first to experience Broccoli & Co. when we launch.',
    },
  },
};
export default modelData;
