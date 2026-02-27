import { table } from './storage';

// Create the API
export const api = new sst.aws.ApiGatewayV2('Api', {
  transform: {
    route: {
      handler: {
        link: [table],
      },
    },
  },
});

api.route('POST /practice', 'packages/functions/src/create.main');
api.route('GET /practice/{id}', 'packages/functions/src/get.main');
api.route('GET /practice', 'packages/functions/src/list.main');
api.route('PUT /practice/{id}', 'packages/functions/src/update.main');
api.route('DELETE /practice/{id}', 'packages/functions/src/delete.main');
