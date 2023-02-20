import { faker } from '@faker-js/faker';
import { types } from 'helpers';

export const orders = (size = 16): types.Order[] => {
    const data = [] as types.Order[];
    for (let f = 0; f < size; f++) {
        data.push({
            id: faker.datatype.number(),
            type: faker.helpers.arrayElement(Object.keys(types.OrderTypes)) as types.OrderTypes,
            item: {
                id: faker.datatype.number(),
                name: faker.commerce.productName(),
            },
            category: {
                id: faker.datatype.number({ precision: 2 }),
                name: faker.commerce.department(),
            },
            description: faker.commerce.productDescription(),
            created_at: faker.date.recent() as unknown as string,
        });
    }
    return data;
}