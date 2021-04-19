export interface VuexState {
  state: {
    token: string;
    modelData: ModelInfo;
  };
}

export interface InvitationInfo {
  name: string;
  email: string;
}

export interface InvitationResponnse {
  status: string;
  message: string;
}

export type InviteAction = (
  data: InvitationInfo
) => Promise<InvitationResponnse>;

export enum ModelStatus {
  Initial,
  Toinvitate,
  Invitating,
  InvitatedOk,
  InvitatedError,
}
export interface Form1 {
  title: string;
  // name: string;
  // email: string;
  // confirmEmail: string;
  button: {
    text: string;
    loading: boolean;
  };
  errorMessage?: string;
  okMessage?: string;
}

export interface Form2 {
  title: string;
  text: string;
  button: {
    text: string;
  };
}

export interface ModelInfo {
  status: ModelStatus;
  [ModelStatus.Initial]: {
    isVisible: boolean;
    form: Form1 | Form2;
  };
  [ModelStatus.Toinvitate]: {
    isVisible: boolean;
    form: Form1 | Form2;
  };
  [ModelStatus.Invitating]: {
    isVisible: boolean;
    form: Form1 | Form2;
  };
  [ModelStatus.InvitatedOk]: {
    isVisible: boolean;
    form: Form1 | Form2;
  };
  [ModelStatus.InvitatedError]: {
    isVisible: boolean;
    form: Form1 | Form2;
  };
}
