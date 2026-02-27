export const bucket = new sst.aws.Bucket('Uploads');

export const table = new sst.aws.Dynamo('Practice', {
  fields: {
    userId: 'string',
    noteId: 'string',
  },
  primaryIndex: { hashKey: 'userId', rangeKey: 'noteId' },
});
