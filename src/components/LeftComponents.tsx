import React from "react";
import ContractAddress from "./ContractAddress";
import AutoGovernors from "./AutoGovernors";
import Balances from "./Balances";
import LGPStatus from "./LGPStatus";
import Settings from "./Settings";

export default function LeftComponents() {
  return (
    <section className="flex flex-col gap-4">
      <ContractAddress />
      <AutoGovernors />
      <Balances />
      <LGPStatus />
      <Settings />
    </section>
  );
}
