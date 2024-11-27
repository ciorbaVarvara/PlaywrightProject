import { test, expect } from '@playwright/test'
import { test1, test2, test3, test4, test5, test6, test7, test8 } from './BaseTest.ts';


test.describe("workflow1", async () => {

    test("Apply for Service Name", async ({page}) => {
      await test1(page);
      await test2(page);
      await test3(page);
      await test4(page);
      await test5(page);
      await test6(page);
      await test7(page);
      await test8(page);
    });
    
  });