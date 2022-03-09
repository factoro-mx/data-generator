# CFDI Generator

Generates randomly SAT-compliant invoices

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
node cfdi.js
```

## Options

| Option                          | Description                | Type   | Default |
| ------------------------------- | -------------------------- | ------ | ------- |
| -V, --version                   | output the version         | n/a    | n/a     |
| -a, --amount <number>           | amount of documents needed | number | 20      |
| -et, --emitter-tax-id <tax_id>  | emitter tax id             | string | `ASD`   |
| -en, --emitter-name <name>      | emitter name               | string | `ASD`   |
| -rt, --receiver-tax-id <tax_id> | receiver tax id            | string | `ASD`   |
| -rn, --receiver-name <name>     | receiver tax id            | string | `ASD`   |
| -h, --help                      | display help for command   | string | `ASD`   |
