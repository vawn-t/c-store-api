import { PrismaClient, UserStatus } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import csvParser from 'csv-parser';
import { generateHash } from '../src/utils';

const prisma = new PrismaClient();

interface CSVRow {
  model: string;
  id: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
}

async function main() {
  console.log('Seeding database...');
  const results: CSVRow[] = [];

  // Read CSV file
  await new Promise<void>((resolve) => {
    fs.createReadStream(path.join(__dirname, 'templateData.csv'))
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve();
      });
  });

  // Group rows by model
  const modelGroups: { [key: string]: CSVRow[] } = {};
  results.forEach((row) => {
    if (!modelGroups[row.model]) {
      modelGroups[row.model] = [];
    }
    modelGroups[row.model].push(row);
  });

  // Create data in the correct order to respect foreign key constraints
  // 1. Categories
  if (modelGroups.Category) {
    console.log('Seeding categories...');
    for (const row of modelGroups.Category) {
      await prisma.category.upsert({
        where: { id: parseInt(row.id) },
        update: {
          name: row.field1,
        },
        create: {
          id: parseInt(row.id),
          name: row.field1,
        },
      });
    }
  }

  // 2. Product Units
  if (modelGroups.ProductUnit) {
    console.log('Seeding product units...');
    for (const row of modelGroups.ProductUnit) {
      await prisma.productUnit.upsert({
        where: { id: parseInt(row.id) },
        update: {
          name: row.field1,
        },
        create: {
          id: parseInt(row.id),
          name: row.field1,
        },
      });
    }
  }

  // 3. Products
  if (modelGroups.Product) {
    console.log('Seeding products...');
    for (const row of modelGroups.Product) {
      await prisma.product.upsert({
        where: { id: parseInt(row.id) },
        update: {
          name: row.field1,
          description: row.field2,
          price: parseFloat(row.field3),
          quantityStock: parseInt(row.field4),
          categoryId: parseInt(row.field5),
          productUnitId: parseInt(row.field6),
        },
        create: {
          id: parseInt(row.id),
          name: row.field1,
          description: row.field2,
          price: parseFloat(row.field3),
          quantityStock: parseInt(row.field4),
          categoryId: parseInt(row.field5),
          productUnitId: parseInt(row.field6),
        },
      });
    }
  }

  // 4. Users
  if (modelGroups.User) {
    const defaultPassword = '!Password123';
    const { hash } = generateHash(defaultPassword);

    console.log('Seeding users...');
    for (const row of modelGroups.User) {
      await prisma.user.upsert({
        where: { id: parseInt(row.id) },
        update: {
          email: row.field1,
          name: row.field2,
          password: hash,
          status: row.field4 as UserStatus,
        },
        create: {
          id: parseInt(row.id),
          email: row.field1,
          name: row.field2,
          password: hash,
          status: row.field4 as UserStatus,
        },
      });
    }
  }

  // 5. User Settings
  if (modelGroups.UserSetting) {
    console.log('Seeding user settings...');
    for (const row of modelGroups.UserSetting) {
      await prisma.userSetting.upsert({
        where: { id: parseInt(row.id) },
        update: {
          userId: parseInt(row.field1),
          enableEmailNotification: row.field2 === 'true',
          enableOrderNotification: row.field3 === 'true',
          enableGeneralNotification: row.field4 === 'true',
        },
        create: {
          id: parseInt(row.id),
          userId: parseInt(row.field1),
          enableEmailNotification: row.field2 === 'true',
          enableOrderNotification: row.field3 === 'true',
          enableGeneralNotification: row.field4 === 'true',
        },
      });
    }
  }

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
