# Introduction 
This is a simple project to build a synchronized architecture to send messages in order.
I'm using the following services:
  - SNS
  - SQS
  - Lambda

# Architecture
![alt text](https://github.com/brunocamboim/serverless-sns-fifo-architecture/blob/master/architecture.png?raw=true)

# Getting Started
First of all, clone the repository.

1.	Installation process
  - Open the terminal and enter your repository
  - Run the command: npm install
  - Within VS Code, run the debugger to test local

# Build and Test
  - To build your application and deploy to AWS, you need to set some envs. See the docs: <a href="https://www.serverless.com/framework/docs/"> https://www.serverless.com/framework/docs/ </a>
  - After that, run npm run deploy
