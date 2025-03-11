# Categories

## Sequence Diagram

![image info](./assets/categories.png)

---

## Get Product's Category

_Used to get all categories of system._

**URL:** `/api/v1/catalogue/categories/`

**Method:** `GET`

**Auth required:** YES

**HTTP Headers constraints**

```json
{
  "authorization": "JWT [valid token]"
}
```

**HTTP Headers example**

```json
{
  "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "categories": [
    {
      "id": "1",
      "name": "Vegetables",
      "image": "https://via.placeholder.com/150",
      "createdAt": "22-04-19 12:00:17",
      "updatedAt": "22-04-19 14:20:00"
    },
    {
      "id": "2",
      "name": "Fruits",
      "image": "https://via.placeholder.com/150",
      "createdAt": "22-04-19 12:00:17",
      "updatedAt": "22-04-19 14:20:00"
    }
  ]
}
```

---

## Create Product's Category

_Used to add category_

**URL:** `/api/v1/catalogue/categories/`

**Method:** `POST`

**Auth required:** YES

**HTTP Headers constraints**

```json
{
  "authorization": "JWT [valid token]"
}
```

**HTTP Headers example**

```json
{
  "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

**Request Data constraints**

```json
{
  "name": "[name in plain text]",
  "image": "[valid formData image]"
}
```

**Request Form Data Image example (multipart/form-data)**

```
{
  summary: Uploads a file.
    consumes:
      - multipart/form-data
  parameters:
    - in: formData
      name: image
      type: file
      required: true
      description: The category's image to upload.
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "id": 1,
  "name": "Demo Category",
  "createdAt": "2023-03-28T06:01:02.232Z",
  "updatedAt": "2023-03-28T06:01:02.233Z",
  "image": "https://via.placeholder.com/150"
}
```

## Error Response

**Condition:** If 'name' is already registered.

**Code:** `409 CONFLICT`

**Content:**

```json
{
  "errors": [
    {
      "param": "name",
      "msg": "Name already registered",
      "location": "body"
    }
  ]
}
```

**[*] Condition:** If uploaded file with unsupported media type

**Code:** `415 UNSUPPORTED MEDIA TYPE`

**Content:**

```json
{
  "errors": ["The image uploaded with wrong media type"]
}
```

**[*] Condition:** If uploaded file too large

**Code:** `413 REQUEST ENTITY TOO LARGE`

**Content:**

```json
{
  "errors": ["The image uploaded with too large size"]
}
```
