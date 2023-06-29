const countComments = (commentsFromApi) => commentsFromApi.length;

const allComments = [
  {
    comment: 'This is nice!',
    creation_date: '2021-01-10',
    username: 'John',
  },
  {
    comment: 'Great content!',
    creation_date: '2021-02-10',
    username: 'Othniel',
  },
  {
    comment: 'Greater content!',
    creation_date: '2021-02-13',
    username: 'Marvin',
  },
];

export { allComments, countComments };
