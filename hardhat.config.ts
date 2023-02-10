import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    bungaraya: {
      url: "http://127.0.0.1:8888",
      httpHeaders: {
        Authorization:
          "Bearer 91.JGFyZ29uMmkkdj0xOSRtPTQwOTYsdD0zLHA9MSRjbUZ1Wkc5dGMyRnNkQSRQZy9xWXArZ296V01tSm5wYUUyZEdyMjdidkNaY2lVOXVkWGJKaDdORExJ",
      },
    },
  },
};

export default config;
