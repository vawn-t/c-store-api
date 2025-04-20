# User's Avatar

## Sequence Diagram

![image info](./assets/avatar.png)

---

## Update User's Avatar

_Used to update user avatar_

**URL:** `/api/v1/users/:userId/avatar/`

**Method:** `PATCH`

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

**Request Data constraints (multipart/form-data)**

```json
{
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
      description: The avatar to upload.
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "image": "https://via.placeholder.com/150"
}
```

## Error Response

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
