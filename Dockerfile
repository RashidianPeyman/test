FROM node:latest

# رو بساز app دایرکتوری
WORKDIR /app

# وابستگی‌های اپ رو نصب کن
# از علامت ستاره استفاده شده تا هم فایل قفل و هم فایل عادی کپی بشه
COPY package*.json ./

RUN npm install
# اگه داری اپلیکیشن رو برای پروداکشن میسازی از دستور زیر استفاده کن

# سورس اپ رو بسته‌بندی کن
COPY . .


EXPOSE 80
CMD [ "npm", "start" ]