import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { DELETE, GET, PATCH } from "../../../api/methods";
import url from "../../../api/urls";
import dateFormatter from "../../../utils/dateFormatter";
import getDarkClass from "../../../utils/getDarkClass";
import Loader from "../../Loader";
import MapPopup from "../../MapPopup";
import Table from "../../Table";

function Submissions(props) {
  const [accepted, setAccepted] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [coords, setCoords] = useState(null);
  const load = async () => {
    setLoading(true);
    const accepted = await GET(url.agents.submissions.getApprovedSubmisions);
    const rejected = await GET(url.agents.submissions.getRejectedSubmisions);
    const pending = await GET(url.agents.submissions.getUnApprovedSubmisions);
    if (pending.ok) {
      setPending(pending.response.data);
    }
    if (rejected.ok) {
      setRejected(rejected.response.data);
    }
    if (accepted.ok) {
      setAccepted(accepted.response.data);
    }
    setLoading(false);
  };
  const updateSubmission = async (type, id) => {
    toast.info("Updating");
    setLoading(true);
    await PATCH(url.agents.submissions.base + type + "/" + id);
    await load();
    setLoading(false);
  };
  const deleteSubmission = async (id) => {
    toast.warn("Deleting");
    setLoading(true);
    await DELETE(url.agents.submissions.base + "/" + id);
    await load();
    setLoading(false);
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div>
      <Loader loading={loading} />
      <MapPopup closeMap={() => setCoords(null)} coords={coords} />
      <h2
        style={{ textAlign: "center", marginBottom: 10, marginTop: 10 }}
        className={`${getDarkClass("dark-light-color")}`}
      >
        Pending
      </h2>
      <Table
        options={[
          {
            icon: "Check",
            tooltip: "Mark as Approved",
            onClick: (a, b) => {
              updateSubmission("/accept", b._id);
            },
          },
          {
            icon: "Clear",
            tooltip: "Mark as Rejected",
            onClick: (a, b) => {
              updateSubmission("/reject", b._id);
            },
          },
          {
            icon: "Map",
            tooltip: "View location on map",
            onClick: (a, b) => {
              setCoords(b.Location);
            },
          },
        ]}
        title="Added Submissions"
        column={[
          // {title: 'ID', field: '_id'},
          { title: "Price", field: "Price" },
          { title: "Commodity", field: "CommodityID" },
          { title: "Quantity", field: "Quantity" },
          { title: "State", field: "State" },
          { title: "Market Name", field: "Market" },
          { title: "Market Location", field: "MarketL" },
          { title: "Agent", field: "AgentID" },
          { title: "L G A", field: "LocalGov" },
          { title: "Date", field: "SubmissionDate" },
        ]}
        data={pending.map((itm) => ({
          ...itm,
          State: itm.State.StateName,
          LocalGov: itm.LocalGov.Name,
          CommodityID: itm.CommodityID.CommodityName,
          Quantity: itm.Quantity.Quantity,
          Market: itm.Market.Name,
          MarketL: itm.Market.Location,
          AgentID: `${itm.AgentID.FirstName} ${itm.AgentID.MiddleName} ${itm.AgentID.LastName}`,
          SubmissionDate: dateFormatter(itm.SubmissionDate, true),
        }))}
      />
      <h2
        style={{ textAlign: "center", marginBottom: 10, marginTop: 10 }}
        className={`${getDarkClass("dark-light-color")}`}
      >
        Rejected
      </h2>
      <Table
        options={[
          {
            icon: "Check",
            tooltip: "Mark as Approved",
            onClick: (a, b) => {
              updateSubmission("/accept", b._id);
            },
          },
          {
            icon: "Delete",
            tooltip: "Delete Submission",
            onClick: (a, b) => {
              deleteSubmission(b._id);
            },
          },
          {
            icon: "Map",
            tooltip: "View location on map",
            onClick: (a, b) => {
              setCoords(b.Location);
            },
          },
        ]}
        title="Rejected Submissions"
        column={[
          // {title: 'ID', field: '_id'},
          { title: "Price", field: "Price" },
          { title: "Commodity", field: "CommodityID" },
          { title: "Quantity", field: "Quantity" },
          { title: "State", field: "State" },
          { title: "Market Name", field: "Market" },
          { title: "Market Location", field: "MarketL" },
          { title: "Agent", field: "AgentID" },
          { title: "L G A", field: "LocalGov" },
          { title: "Date", field: "SubmissionDate" },
        ]}
        data={rejected.map((itm) => ({
          ...itm,
          State: itm.State.StateName,
          LocalGov: itm.LocalGov.Name,
          CommodityID: itm.CommodityID.CommodityName,
          Quantity: itm.Quantity.Quantity,
          Market: itm.Market.Name,
          MarketL: itm.Market.Location,
          AgentID: `${itm.AgentID.FirstName} ${itm.AgentID.MiddleName} ${itm.AgentID.LastName}`,
          SubmissionDate: dateFormatter(itm.SubmissionDate, true),
        }))}
      />
      <h2
        style={{ textAlign: "center", marginBottom: 10, marginTop: 10 }}
        className={`${getDarkClass("dark-light-color")}`}
      >
        Approved
      </h2>
      <Table
        options={[
          {
            icon: "Clear",
            tooltip: "Mark as Rejected",
            onClick: (a, b) => {
              updateSubmission("/reject", b._id);
            },
          },
          {
            icon: "Delete",
            tooltip: "Delete Submission",
            onClick: (a, b) => {
              deleteSubmission(b._id);
            },
          },
          {
            icon: "Map",
            tooltip: "View location on map",
            onClick: (a, b) => {
              setCoords(b.Location);
            },
          },
        ]}
        title="Approved Submissions"
        column={[
          // {title: 'ID', field: '_id'},
          { title: "Price", field: "Price" },
          { title: "Commodity", field: "CommodityID" },
          { title: "Quantity", field: "Quantity" },
          { title: "State", field: "State" },
          { title: "Market Name", field: "Market" },
          { title: "Market Location", field: "MarketL" },
          { title: "Agent", field: "AgentID" },
          { title: "L G A", field: "LocalGov" },
          { title: "Date", field: "SubmissionDate" },
        ]}
        data={accepted.map((itm) => ({
          ...itm,
          State: itm.State.StateName,
          LocalGov: itm.LocalGov.Name,
          CommodityID: itm.CommodityID.CommodityName,
          Quantity: itm.Quantity.Quantity,
          Market: itm.Market.Name,
          MarketL: itm.Market.Location,
          AgentID: `${itm.AgentID.FirstName} ${itm.AgentID.MiddleName} ${itm.AgentID.LastName}`,
          SubmissionDate: dateFormatter(itm.SubmissionDate, true),
        }))}
      />
    </div>
  );
}

export default Submissions;
