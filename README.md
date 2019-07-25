# Warning

By default, the Node-RED editor is not secured - anyone who can access its IP address can access the editor and deploy
changes.

This is only suitable if you are running on a trusted network.


# Prerequisites

- A system which runs a [Node.js version supported by Node-RED](https://nodered.org/docs/faq/node-versions) (currently
  recommended: Node.js 10.x LTS).
- Optional: an [Azure IoT Central](https://azure.microsoft.com/services/iot-central/) account.


# Quick Start

- Clone the repo and install the NPM packages:
  ```sh
  $ git clone https://github.com/cdlans/node-red-iot-connector.git

  $ cd node-red-iot-connector

  $ npm install
  ```

- Configure the Azure IoT Central device ID, hostname and key in the [`.env`](.env) file. Check the tutorial [Add a real
  device to your Azure IoT Central application](https://docs.microsoft.com/en-us/azure/iot-central/tutorial-add-device)
  for instructions on generating a connection string containing these settings.

  If you are not connecting to Azure IoT Central you can skip this step, but you might want to remove or disconnect the
  Azure IoT Hub nodes to avoid error messages.

- Start the application:
  ```sh
  $ npm start
  ```


# TODO

- Check package.json
- Update license in package.json
- Add warning regarding IoT Hub vulnerabilities
- Add mock sensor data
- Add presentation
- Add HTTP authentication?
