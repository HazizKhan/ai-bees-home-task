**Table of Contents**
- [Introduction](#Introduction)
- [Tech Stack](#TechStack)
- [Setup](#Setup)
- [GettingStarted](#GettingStarted")
- [APIs](#APIs)

## Introduction

Welcom To AI-BEES Test
Test done by Haziz Feroz Khan()

<!-- some small introduction -->

## TechStack
1. NestJs
2. MongoDB

## Setup

1. Install dependecies with `npm install` or `yarn`
2. Add `.env` file for reference you can check `.env.sample`

## GettingStarted
### Run App Locally

1. run `npm run start:dev`

### Run App with Docker

1. Make sure docker is running on your system
2. run `docker compuse up dev`

### Add Data to DB
1. run `npm run seed` on the root directory of the project

## APIs
### `POST /auth/login`
```
body: {
  username,
  password
}

response: {
  access_token
}
```
#### Test Users
```
[
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
]
```

### `GET /product/all`
```
headers: {
  Authorization: `Bearer ${access_token}`
}

response: List of Products

```

### `GET /category/all`
```
headers: {
  Authorization: `Bearer ${access_token}`
}

response: List of Categories

```

### `GET /product/discount/{{product_id}}`
```
headers: {
  Authorization: `Bearer ${access_token}`
}

response: {
  data: discount in percentage
}

```
