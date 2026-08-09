import { test as setup } from '@playwright/test';
import dotenv from 'dotenv';

export const programElements = {

    // Pagination
    firstPage: 'button.p-paginator-first',

    previousPage: 'button.p-paginator-prev',

    paginationPages: 'span.p-paginator-pages',

    pageNumberButtons: 'span.p-paginator-pages button',

    nextPage: 'button.p-paginator-next',

    lastPage: 'button.p-paginator-last'
};