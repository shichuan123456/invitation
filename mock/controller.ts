
import Mock from 'mockjs';
export function toInvitate({body}) {
    const { email, name } = JSON.parse(body);
    return Mock.mock('Registered')
}