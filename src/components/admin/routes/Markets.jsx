import React, { useState } from "react";
import { useContext } from "react";
import AdminContext from "../../../contexts/AdminContext";
import getDarkClass from "../../../utils/getDarkClass";
import AddMarket from "../../AddMarket";
import MapPopup from "../../MapPopup";
import Table from "../../Table";

function Markets(props) {
  const { registeredMarkets } = useContext(AdminContext);
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState(null);
  return (
    <div>
      <AddMarket isVisble={visible} setIsVisible={setVisible} />
      <MapPopup coords={coords} closeMap={() => setCoords(null)} />
      {!visible && (
        <>
          <div
            onClick={() => setVisible(true)}
            className={`btn_submit btn_add ${getDarkClass("dark-light")}`}
          >
            New Market
          </div>
          <Table
            options={[
              {
                icon: "Map",
                tooltip: "View location on map",
                onClick: (a, b) => {
                  setCoords(b.LocationLatLng);
                },
              },
            ]}
            title="Markets"
            column={[
              // { title: 'ID', field: '_id' },
              { title: "Name", field: "Name" },
              { title: "State", field: "State" },
              { title: "L G A", field: "LocalGov" },
              { title: "Location", field: "Location" },
            ]}
            data={registeredMarkets.map((agent) => ({
              ...agent,
              LocalGov: agent.LocalGov.Name,
              State: agent.State["StateName"],
            }))}
          />
        </>
      )}
    </div>
  );
}

export default Markets;
