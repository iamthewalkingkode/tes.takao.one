import { types } from 'helpers';
import DATA from './orders.json';

const dbpref = 'takao_';

export const app = {
    version: require('../../package.json').version,
}


export const isJson = (str: any) => {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}


// ::: storage
export const setStorage = (key: string, value: string) => {
    if (key && value) {
        localStorage.setItem(dbpref + key, value);
    }
}
export const getStorage = (key: string) => {
    const value = localStorage.getItem(dbpref + key);
    return value || '';
}
export const setStorageJson = (key: string, value: any) => {
    if (key && value) {
        localStorage.setItem(dbpref + key, JSON.stringify(value));
    }
}
export const getStorageJson = (key: string) => {
    if (key) {
        const value = localStorage.getItem(dbpref + key) || '';
        return isJson(value) ? JSON.parse(value) : '';
    }
}
export const delStorage = (key: string) => {
    if (key) {
        localStorage.removeItem(dbpref + key);
    }
}

export const redirect = (to: any) => {
    window.location = to;
}

export const generateOptions = (length: number, step = 1) => {
    const arr = [];
    for (let value = 0; value < length; value += step) {
        arr.push(value);
    }
    return arr;
};

export const numberFormat = (number: number, decimal = 3) => {
    number = number || 0;
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: decimal === 0 ? 0 : 2, maximumFractionDigits: decimal }).format(number);
}

export const chunk = (inputArray: any, chunkSize: number) => {
    return inputArray.reduce((resultArray: any, item: any, index: number) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray
    }, []);
}

export const fetchAllOrders = (): Promise<types.Order[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(DATA as types.Order[]);
        }, 1000);
    });
}