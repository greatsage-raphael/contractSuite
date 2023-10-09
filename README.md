# ContractScan🔦📑

This project uses AI to analyze contracts and then sign them electronically after . 

[![ContractScan](./public/audio.png)](https://restorephotos.io/)

## Powered by

This example is powered by the following services:
- [DropBox Sign Api](https://app.hellosign.com/account/signUp) (Electronic Signatures)
- [OpenAI](https://platform.openai.com/) (AI API)
- [Bytescale](https://www.bytescale.com/) (storage)

## How it works

It uses gpt3.5 turbo api on [Open_AI](https://platform.openai.com/) to analyze a contract for malicious content and then gives the user the ability to sign the contract they uploaded. It does this by prompting the user for two email adderesses: 
1.For the First Signer on the contract, 
2.The second Signer of the contract

## Running Locally
 You can git clone from [this](https://github.com/greatsage-raphael/contractSuite).

### Cloning the repository the local machine.

```bash
git clone https://github.com/greatsage-raphael/contractSuite
```

### Creating a account on DropBox to get an API key.
1. Go to [DropBox](https://app.hellosign.com/account/signUp) to signUp.
2. Get the api key and paste it in .env

### Creating a account on OpenAI to get an API key.

1. Go to [OpenAI](https://platform.openai.com/) to make an account.
2. Click on your profile picture in the top right corner, and click on "View API Keys".
3.  And, [here](https://platform.openai.com/account/api-keys) you can find your API token, copy it.

### Creating a account on ByteScale to get an API key.

1. Go to [ByteScale](https://www.bytescale.com/) to make an account.
2. Get the api key and paste it in .env


### Storing API key in .env file.

Create a file in root directory of project with env. And store your API key in it, as shown in the .example.env file.

```bash
npm install
```

### Running the application.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/greatsage-raphael/contractSuite&env=NEXT_PUBLIC_sign&project-name=contractSuite&repo-name=contractSuite)

