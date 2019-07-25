# Warnings

- By default, the Node-RED editor is not secured - anyone who can access its IP address can access the editor and deploy
  changes.

  This is only suitable if you are running on a trusted network.

- The [Azure IoT Hub nodes](https://www.npmjs.com/package/node-red-contrib-azure-iot-hub) are not developed by
  Microsoft. The package is not maintained and contains several vulnerabilities. Use at your own risk.


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

- Point your browser to http://localhost:1880 to open the Node-RED editor. Replace `localhost` with the address of the
  machine running Node-RED, if you are not running Node-RED on your local machine.

- Point your browser to http://localhost:1880/ui to open the Node-RED dashboard.


# Presentation

The PowerPoint slides explaining [How to Build an IoT Connector in 10 Minutes](doc/Node-RED-IoT-connector.pptx). 


# TODO

- Add startup options for Raspberry Pi
- Add mock sensor data
- Add instructions on setting up Azure IoT central
- Add instructions on which tabs in the flow to use
- Add instructions on setting up with globally installed Node-RED
- Add tests
- Add photo + description of car
- Add HTTP authentication?
