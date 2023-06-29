import { countItems, allItems } from '../modules/__mocks__/itemsCounter.js';

test('Test if the number of items is ok...', () => {
  expect(countItems(allItems)).toBe(2);
});