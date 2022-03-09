# Data Generator

Generates randomly SAT-compliant data

## Usage

1.  Clone the repo

```sh
git clone
```

2. Install dependencies

```sh
npm install
```

or

```sh
yarn
```

3. Run

```sh
node generator.js documents
```

## Commands

### documents

Generates the specified amount of XML files

```sh
node generator.js documents
```

#### Options

| Option                          | Description                | Type   | Default         |
| ------------------------------- | -------------------------- | ------ | --------------- |
| -a, --amount <number>           | amount of documents needed | number | 20              |
| -et, --emitter-tax-id <tax_id>  | emitter tax id             | string | `NCCN090311EK6` |
| -en, --emitter-name <name>      | emitter name               | string | `Supplier`      |
| -rt, --receiver-tax-id <tax_id> | receiver tax id            | string | `YWYW690928KQ2` |
| -rn, --receiver-name <name>     | receiver tax id            | string | `Buyer`         |

### tax-id

Generates a new tax id

```sh
node generator.js tax-id
```

#### Options

| Option            | Description                         | Type   | Default |
| ----------------- | ----------------------------------- | ------ | ------- |
| -t, --type <type> | type of company (moral or physical) | string | `moral` |

### account-number

Generates a new account number

```sh
node generator.js account-number
```
