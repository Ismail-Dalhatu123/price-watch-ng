import React from "react";
import { useContext } from "react";
import AdminContext from "../../../contexts/AdminContext";
import Table from "../../Table";
import AddAgent from "../../AddAgent";
import { useState } from "react";
import getDarkClass from "../../../utils/getDarkClass";

function Agents(props) {
  const { registeredAgents } = useContext(AdminContext);
  const [isVisble, setIsVisible] = useState(false);
  console.log(registeredAgents);
  return (
    <div>
      <AddAgent isVisivle={isVisble} setIsVisible={setIsVisible} />
      {!isVisble && (
        <>
          <div
            onClick={() => setIsVisible(true)}
            className={`btn_submit btn_add ${getDarkClass("dark-light")}`}
          >
            Add Agent
          </div>
          <Table
            title="Agents"
            viewItem={() => {}}
            column={[
              { title: "ID", field: "ID" },
              { title: "First Name", field: "FirstName" },
              { title: "Middle Name", field: "MiddleName" },
              { title: "Last Name", field: "LastName" },
              { title: "Email", field: "Email" },
              { title: "Phone Number", field: "PhoneNumber" },
              { title: "State", field: "State" },
              { title: "L G A", field: "LocalGov" },
              { title: "Market", field: "Market" },
            ]}
            data={registeredAgents.map((agent) => ({
              ...agent,
              Market: agent.Market.Name,
              LocalGov: agent.LocalGov.Name,
              State: agent.State["StateName"],
              ID: `${agent.State["StateCode"]}${
                agent.ID < 10
                  ? `000${agent.ID}`
                  : agent.ID < 100
                  ? `00${agent.ID}`
                  : agent.ID
              }`,
            }))}
          />
        </>
      )}
    </div>
  );
}

export default Agents;
