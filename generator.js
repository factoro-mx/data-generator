// Creates a random number of documents for testing.
const commander = require("commander");
const createAccountNumber = require("./accountNumber");
const createTaxId = require("./taxId");
const createDocuments = require("./document");

const program = new commander.Command();

program
  .name("Factoro data generator")
  .description("CLI to generate fiscal data needed for factoro")
  .version("1.0.0");

const parseAmount = (value) => {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError("Amount not a number");
  }
};

program
  .command("documents")
  .description("generate SAT-compliant invoices")
  .option(
    "-a, --amount <number>",
    "amount of documents needed",
    20,
    parseAmount
  )
  .option("-et, --emitter-tax-id <tax_id>", "emitter tax id", "NCCN090311EK6")
  .option("-en, --emitter-name <name>", "emitter name", "Supplier")
  .option("-rt, --receiver-tax-id <tax_id>", "receiver tax id", "YWYW690928KQ2")
  .option("-rn, --receiver-name <name>", "receiver name", "Buyer")
  .option("-t, --type <type>", "invoice type", "PPD")
  .option("-c, --currency <currency>", "currency", "MXN")
  .action((options) => {
    console.log(options);
    createDocuments(options);
  });

program
  .command("tax-id")
  .description("generate SAT-compliant tax ids")
  .addOption(
    new commander.Option(
      "-t, --type <type>",
      "type of company (moral or physical)"
    )
      .default("moral")
      .choices("moral", "physical")
  )
  .action((options) => {
    createTaxId(options);
  });

program
  .command("account-number")
  .description("generate bank compliant account numbers")
  .action(() => {
    console.log(createAccountNumber());
  });

program.parse();
