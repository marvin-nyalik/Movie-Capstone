const countItems = (itemsFromApi) => itemsFromApi.length;

const allItems = [
  {
    show: {
      id: 1,
      url: 'https://www.tvmaze.com/shows/1/under-the-dome',
      name: 'Under the Dome',
      type: 'Scripted',
      language: 'English',
    },
  },
  {
    show: {
      id: 2,
      url: 'https://www.tvmaze.com/shows/2/person-of-interest',
      name: 'Person of Interest',
      type: 'Scripted',
      language: 'English',
    },
  },
];

export { countItems, allItems };

// test('Test if the number of items is ok...', () => {
//     expect(countItems([{ id: 1 }, { id: 2 }, { id: 3 }])).toBe(3);
// });
