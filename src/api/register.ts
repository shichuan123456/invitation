import request from '@/utils/request';
import { InvitationInfo } from '@/types/invitation';

export function toInvite(data: InvitationInfo) {
  return request({
    url: `/prod/fake-auth`,
    data,
    method: 'POST',
  });
}
