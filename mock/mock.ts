import Mock from "mockjs";
import * as controller from './controller';
const baseUrl = process.env.VUE_APP_SERVER_BASE_URL;

Mock.setup({
  timeout: 0-300
})
Mock.mock(`${baseUrl}/prod/fake-auth`, 'post', controller.toInvitate);
